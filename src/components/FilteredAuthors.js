import React from 'react';
import { Link } from '@curi/react';

import Cover from 'components/Cover';
import { genreMap } from 'constants/genres';

const FilteredAuthors = ({ authors, filter }) => {
  const re = new RegExp(filter, 'i');
  return authors
    .filter(author => filter === '' || re.test(author.name))
    .map(author => {
      const { name, genre } = author;
      return (
        <li key={name}>
          <Link to='Author' params={{ author: name }}>
            <Cover title={name} classes={[genreMap[genre].className]} />
          </Link>
        </li>
      );
    });
}

export default FilteredAuthors;
