import React from 'react';

import Stats from 'components/stats/Stats';
import Showcase from 'components/Showcase';

export default function Index(props) {
  const { books } = props.data;
  return (
    <div>
      <Stats books={books} />
      <Showcase
        books={books}
        addPath='/add' />
    </div>
  );
}
