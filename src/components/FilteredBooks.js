import React from 'react';

import Book from './Book';

const FilteredBooks = ({ books, filter }) => {
  const re = new RegExp(filter, 'i');
  return books
    .filter(book => filter === '' || re.test(book.title))
    .map((b, i) => {
      return (
        <Book key={i} index={i%10} {...b} />
      );
    });
}

export default FilteredBooks;
