import React from 'react';

import PopularAuthors from './PopularAuthors';
import GenreBarChart from './GenreBarChart';

import 'sass/stats.scss';

const Stats =({ books }) => (
  <div className='stats'>
    <GenreBarChart books={books} />
    <PopularAuthors books={books} />
  </div>
);

export default Stats;
