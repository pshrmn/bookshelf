import React from 'react';

import Book from './Book';
import Cover from './Cover';
import GenreBar from './GenreBar';

import 'sass/showcase.scss';

export default function showcase(props) {
  const { books } = props;
  return (
    <div className='showcase'>
      <div className='info'>
        {books.length} Books
        <GenreBar books={books} />
      </div>
      <div className='books'>
        {
          books.map((b, i) => <Book key={i} index={i%10} {...b} />)
        }
      </div>
    </div>
  );
}