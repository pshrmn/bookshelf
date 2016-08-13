import React from 'react';
import { Link } from 'react-router';

import Cover from './Cover';
import { genreMap } from 'constants/genres';

import 'sass/book.scss';

export default function Book(props) {
  const { title, author, genre } = props;
  const g = genreMap[genre];
  return (
    <div className='book' title={title}>
      <Cover classes={[g.className]} title={title} />
      <div className='author'>
        <Link to={{pathname: `/author/${author}`}}>{author}</Link>
      </div>
    </div>
  );
}
