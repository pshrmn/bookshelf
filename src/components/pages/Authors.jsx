import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@curi/react';

import Cover from 'components/Cover';
import { genreMap } from 'constants/genres';

import 'sass/authors.scss';

export default function Authors(props) {
  const authors = props.data.authors.map(author => {
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
  data: PropTypes.shape({
    authors: PropTypes.array.isRequired
  }).isRequired
};
