import React from 'react';
import { Link } from 'react-router';

import genres from 'constants/genres';

import 'sass/header.scss';

const GenreBars = genres.map(genre => <li key={genre.name} className={genre.className}></li>);

export default React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return false;
  },
  render: function() {
    return (
      <header>
        <ul>
          {GenreBars}
        </ul>
        <div className='title'>
          <Link to='/' title='home'>Bookshelf</Link>
        </div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/genres'>Genres</Link>
          <Link to='/authors'>Authors</Link>
        </nav>
        <ul>
          {GenreBars}
        </ul>
      </header>
    );
  }
});
