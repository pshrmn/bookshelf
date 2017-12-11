import React from 'react';

import BarChart from 'components/chart/OrdinalBarChart';
import { genresByCount } from 'helpers/counts';
import { genreMap } from 'constants/genres';

export default function GenreBarChart(props) {
  const { books } = props;
  if ( books.length === 0 ) {
    return null;
  }
  const genreCounts = genresByCount(books);
  // don't bother with a bar chart when there is only one class
  if ( genreCounts.length <= 1 ) {
    return null;
  }
  return (
    <div className='bars'>
      <h2>Books per Genre</h2>
      <BarChart
        data={genreCounts}
        getX={d => d.genre}
        getY={d => d.count}
        getTitle={d => d.genre}
        getClassName={d => genreMap[d.genre].className}
        barWidth={30}
      />
    </div>
  );
}
