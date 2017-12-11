import React from 'react';
import { scaleLinear as linear, scaleBand as band } from 'd3-scale';

import Bar from './VerticalBar';
import XAxis from './XAxis';
import YAxis from './YAxis';

import 'sass/chart.scss';

/*
 * A bar chart with an ordinal x-axis and a linear y-axis
 */
class OrdinalBarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yScale: this.yScale(props),
      xScale: this.xScale(props)
    };
  }

  yScale(props) {
    const { data, height, getY } = props;
    // need the maximum y value
    const maxY = data.reduce((max, curr) => {
      let y = getY(curr);
      return y > max ? y : max;
    }, 0);
    return linear()
      .domain([0, maxY])
      .range([height, 0])
      .nice();
  }

  xScale(props) {
    const { data, getX, barWidth } = props;
    const width = data.length*barWidth;
    return band()
      .domain(data.map(d => getX(d)))
      .range([0, width])
      .padding(0.1);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.data !== this.props.data ||
      nextProps.height !== this.props.height ||
      nextProps.getY !== this.props.getY
    ) {
      this.setState({ yScale: this.yScale(nextProps) });
    }

    if (nextProps.data !== this.props.data || nextProps.barWidth !== this.props.barWidth) {
      this.setState({ xScale: this.xScale(nextProps) });
    }
  }

  render() {
    const { height, margin, data, getX, getY, barWidth, getTitle, getClassName } = this.props;
    const { xScale, yScale } = this.state;
    const width = data.length*barWidth;

    if ( data.length === 0 ) {
      return null;
    }

    const bars = data.map((d, i) => {
      const x = xScale(getX(d));
      const count = getY(d);
      const y = yScale(count);
      return (
        <Bar
          key={i}
          x={x}
          y={y}
          width={xScale.bandwidth()}
          height={height-y}
          count={count}
          title={getTitle(d)}
          className={getClassName(d)}
        />
      );
    });

    return (
      <svg
        width={margin.left + width + margin.right}
        height={margin.top + height + margin.bottom }>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <XAxis
            values={data.map(d => getX(d))}
            scale={xScale}
            height={height}
            width={width}
            withTicks={barWidth >= 60}
          />
          <YAxis
            scale={yScale}
            height={height}
          />
          {bars}
        </g>
      </svg>
    );
  }
};

OrdinalBarChart.defaultProps = {
  height: 100,
  margin: {
    top: 15,
    right: 15,
    bottom: 25,
    left: 30
  },
  barWidth: 60
};

export default OrdinalBarChart;
