import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from '@curi/react';

import Cover from 'components/Cover';
import { genreMap } from 'constants/genres';

import 'sass/authors.scss';

function Authors(props) {
  const authors = props.authors.map(author => {
    const { name, genre } = author;
    return (
      <li key={name}>
        <Link to='Author' params={{ author: name }}>
          <Cover title={name} classes={[genreMap[genre].className]} />
        </Link>
      </li>
    );
  });

  return (
    <div>
      <h1>Authors</h1>
      <ul className='authors'>
        {authors}
      </ul>
    </div>
  );
}

Authors.propTypes = {
  authors: PropTypes.array.isRequired
};

export default connect(
  state => ({
    authors: Object.keys(state.authors)
    .map(key => state.authors[key])
    .sort((a,b) => b.books.length - a.books.length)
  })
)(Authors);
