import React from 'react';
import { Link } from '@curi/react';

import Cover from './Cover';
import { genreMap } from 'constants/genres';

import 'sass/book.scss';

export default function Book(props) {
  const { title, authors, genre } = props;
  const g = genreMap[genre];
  return (
    <div className='book' title={title}>
      <Cover classes={[g.className]} title={title} />
      <div className='author'>
        {authors.map(author =>
          <Link
            key={author}
            to='Author'
            params={{ author }}
          >
            {author}
          </Link>
        )}
      </div>
      <div className='genres'>
        <Link to='Genre' params={{ genre }}>{genre}</Link>
      </div>
    </div>
  );
}
