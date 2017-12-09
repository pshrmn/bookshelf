import React from 'react';

import Stats from 'components/Stats';
import Showcase from 'components/Showcase';
import Breadcrumbs from 'components/Breadcrumbs';

export default function Genre(props) {
  const { genre, books, description } = props.data;
  return (
    <div className='genre-page'>
      <Breadcrumbs name='Genre'/>
      <h1>
        {genre} Books
      </h1>
      <p>{description}</p>
      <Stats books={books} />
      <Showcase books={books} />
    </div>
  );
}
