import React from 'react';
import { connect } from 'react-redux';

import Stats from 'components/Stats';
import Showcase from 'components/Showcase';
import Breadcrumbs from 'components/Breadcrumbs';

function Genre(props) {
  const { genre, books } = props;
  return (
    <div className='genre-page'>
      <Breadcrumbs name='Genre'/>
      <h1>
        {genre} Books
      </h1>
      <Stats books={books} />
      <Showcase books={books} />
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
