import React from 'react';

export default function Bar(props) {
  const { x, y, width, height, genre, count, className } = props;
  return (
    <g
      className='bar'
      transform={`translate(${x}, 0)`}>
      <rect
        className={className}
        x='0'
        y={y}
        width={width}
        height={height}
      >
        <title>{className}</title>
      </rect>
      <text x={width/2} y={y-5}>{count}</text>
    </g>
  );
}
