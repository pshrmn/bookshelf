import React from 'react';
import { connect } from 'react-redux';

import Stats from 'components/Stats';
import Showcase from 'components/Showcase';
import Breadcrumbs from 'components/Breadcrumbs';

import { genreMap } from 'constants/genres';

function Genre(props) {
  const { genre, books, description } = props;
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

export default connect(
  (state, ownProps) => {
    const { genre } = ownProps.params;
    return {
      genre: genre,
      description: genreMap[genre].description,
      books: state.books.filter(book => book.genre === genre)
    }
  }
)(Genre);
