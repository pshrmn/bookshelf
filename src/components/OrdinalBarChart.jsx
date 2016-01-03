import React from "react";
import d3_scale from "d3-scale";

/*
 * A bar chart with an ordinal x-axis and a linear y-axis
 */
export default React.createClass({
  getDefaultProps: function() {
    return {
      height: 100,
      margin: {
        top: 15,
        right: 15,
        bottom: 25,
        left: 25
      }  
    };
  },
  render: function() {
    let { height, margin, data, getX, getY, getFill } = this.props;
    let width = data.length*60;

    if ( data.length === 0 ) {
      return null;
    }

    // need the maximum y value
    let maxY = data.reduce((max, curr) => {
      let y = getY(curr);
      return y > max ? y : max;
    }, 0);

    let yScale = d3_scale.linear()
      .domain([0, maxY])
      .range([height, 0]);
    let xScale = d3_scale.band()
      .domain(data.map(d => getX(d)))
      .range([0, width])
      .padding(0.1);

    let bars = data.map((d, i) => {
      let x = xScale(getX(d));
      let count = getY(d);
      let y = yScale(count);
      let barWidth = xScale.bandwidth();
      return (
        <Bar key={i}
             x={x}
             y={y}
             count={count}
             width={barWidth}
             height={height-y}
             genre={d.genre} />
      );
    });

    return (
      <svg width={margin.left + width + margin.right}
           height={margin.top + height + margin.bottom }>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <XAxis values={data.map(d => getX(d))}
                 scale={xScale}
                 height={height}
                 width={width} />
          <YAxis scale={yScale}
                 height={height} />
          {bars}
        </g>
      </svg>
    );
  }
});

let Bar = React.createClass({
  render: function() {
    let { x, y, width, height, genre, count } = this.props;
    return (
      <g className="bar"
         transform={`translate(${x}, 0)`}>
        <rect className={genre.replace("'","")}
              x="0"
              y={y}
              width={width}
              height={height} />
        <text x={width/2} y={y-2}>{count}</text>
      </g>
    );
  }
});

let XAxis = React.createClass({
  render: function() {
    let { values, scale, height, width } = this.props;
    let midbar = scale.bandwidth() / 2;
    let ticks = values.map((t,i) => {
      return (
        <g key={i}
           className="tick"
           transform={`translate(${scale(t) + midbar},0)`}>
          <line y2="6" x2="0"></line>
          <text dy="0.715em" y="9" x="0">
            {t}
          </text>
        </g>
      );
    });
    return (
      <g className="axis x"
         transform={`translate(0,${height})`}>
        <line x1="0" x2={width}></line>
        <g className="ticks">
          {ticks}
        </g>
      </g>
    );
  }
});

let YAxis = React.createClass({
  render: function() {
    let { scale, height } = this.props;
    let ticks = scale.ticks(5).map((t,i) => {
      return (
        <g key={i}
           className="tick"
           transform={`translate(0,${scale(t)})`}>
          <line x2="-6" y2="0"></line>
          <text dx="0.715em" y="5" x="-20">
            {t}
          </text>
        </g>
      );
    });
    return (
      <g className="axis y">
        <line y1="0" y2={height}></line>
        <g className="ticks">
          {ticks}
        </g>
      </g>
    );
  }
})
