import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Stats from 'components/Stats';
import Showcase from 'components/Showcase';
import Breadcrumbs from 'components/Breadcrumbs';

const genre_breadcrumb_paths = [
  {
    to: {pathname: '/'},
    title: 'Home'
  },
  {
    to: {pathname: '/genres'},
    title: 'Genres'
  }
];

const GenreBreadcrumbs = <Breadcrumbs paths={genre_breadcrumb_paths} />;

function Genre(props) {
  const { genre, books, children } = props;
  return (
    <div className='genre-page'>
      {GenreBreadcrumbs}
      <h1>
        {genre} Books
      </h1>
      {
        children ? (
          <div className='children'>
            {children}
          </div>
        ) : null
      }
      <Stats books={books} />
      <Showcase
        books={books}
        addPath={`/genre/${genre}/add`} />
    </div>
  );
}

export default connect(
  (state, ownProps) => {
    const { genre } = ownProps.params;
    return {
      genre: genre,
      books: state.books.filter(book => book.genre === genre)
    }
  }
)(Genre);
