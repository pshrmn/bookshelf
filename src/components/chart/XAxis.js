import React from 'react';

export default function XAxis(props) {
  const { values, scale, height, width, withTicks } = props;
  const midbar = scale.bandwidth() / 2;
  return (
    <g
      className='axis x'
      transform={`translate(0,${height})`}>
      <line x1='0' x2={width}></line>
      {
        withTicks
          ? <g className='ticks'>
              {
                values.map((t,i) =>
                  <g
                    key={i}
                    className='tick'
                    transform={`translate(${scale(t) + midbar},0)`}>
                    <line y2='6' x2='0'></line>
                    <text dy='0.715em' y='9' x='0'>
                      {t}
                    </text>
                  </g>
                )
              }
            </g>
          : null
      }
    </g>
  );
}
