import React from 'react';

export default function YAxis(props) {
  const { scale, height } = props;
  return (
    <g className='axis y'>
      <line y1='0' y2={height}></line>
      <g className='ticks'>
        {
          scale.ticks(5).map((t,i) => 
            <g
              key={i}
              className='tick'
              transform={`translate(0,${scale(t)})`}>
              <line x2='-6' y2='0'></line>
              <text dx='0.715em' y='5' x='-20'>
                {t}
              </text>
            </g>
          )
        }
      </g>
    </g>
  );
}