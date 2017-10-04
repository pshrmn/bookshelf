import React from 'react';
import { Link } from '@curi/react';

import Cover from 'components/Cover';

import genres from 'constants/genres';

import 'sass/genres.scss';

const genres_breadcrumb_routes = [
  {
    to: 'Home',
    title: 'Home'
  }
];

export default function Genres(props) {
  const genreLis = genres.map((g,i) =>
    <li key={i}>
      <Link to='Genre' params={{ genre: g.name }}>
        <Cover title={g.name} classes={[g.className]} />
      </Link>
    </li>
  );
  return (
    <div>
      <h1>Genres</h1>
      <ul className='genres'>
        {genreLis}
      </ul>
    </div>
  );
}
