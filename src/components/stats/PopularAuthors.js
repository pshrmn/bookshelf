import React from 'react';
import { Link } from '@curi/react';

import { mostPopularAuthors } from 'helpers/counts';

export default function PopularAuthors(props) {
  const { books } = props;
  if ( books.length === 0 ) {
    return null;
  }
  return (
    <div className='authors'>
      <h2>Most Read Authors</h2>
      <ol>
        {
          mostPopularAuthors(books).map((a,i) =>
            <li key={i}>
              <Link to='Author' params={{ author: a.author }}>
                {a.author}
              </Link>
            </li>
          )
        }
      </ol>
    </div>
  );
}
