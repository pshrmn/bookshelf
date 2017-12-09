import React from 'react';
import { Link } from '@curi/react';

import genres from 'constants/genres';

import 'sass/header.scss';

const GenreBars = genres.map(genre => <li key={genre.name} className={genre.className}></li>);

export default class TopBar extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <header>
        <ul>
          {GenreBars}
        </ul>
        <div className='title'>
          <Link to='Home' title='home'>Bookshelf</Link>
        </div>
        <nav>
          <Link to='Home'>Home</Link>
          <Link to='Genres'>Genres</Link>
          <Link to='Authors'>Authors</Link>
        </nav>
        <ul>
          {GenreBars}
        </ul>
      </header>
    );
  }
};
