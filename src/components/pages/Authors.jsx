import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Breadcrumbs from 'components/Breadcrumbs';
import Cover from 'components/Cover';
import { genreMap } from 'constants/genres';

import 'sass/authors.scss';

const authors_breadcrumb_paths = [
  {
    to: {pathname: '/'},
    title: 'Home'
  }
];
const AuthorsBreadcrumbs = <Breadcrumbs paths={authors_breadcrumb_paths} />;

function Authors(props) {
  const authors = props.authors.map(author => {
    const { name, genre } = author;
    return (
      <li key={name}>
        <Cover title={name}
               classes={[genre.className]}
               path={{pathname: `/author/${name}`}} />
      </li>
    );
  });

  return (
    <div>
      {AuthorsBreadcrumbs}
      <h1>Authors</h1>
      <ul className='authors'>
        {authors}
      </ul>
    </div>
  );
}

Authors.propTypes = {
  authors: React.PropTypes.array.isRequired
};

export default connect(
  state => {
    // get an object containing all authors and their book count
    const authorsObject = state.books.reduce((authors, book) => {
      const { author } = book;
      if ( !authors[author] ) {
        authors[author] = {
          // use the first book's genre as the author's genre (should
          // be accurate in most cases)
          genre: genreMap[book.genre],
          books: 1
        };
      } else {
        authors[author].books += 1;
      }

      return authors;
    }, {});
    // convert the object to an array
    const authors = Object.keys(authorsObject)
      .map(key => ({
        name: key,
        books: authorsObject[key].books,
        genre: authorsObject[key].genre
      }))
      .sort((a,b) => b.books - a.books);
    return {
      authors: authors
    };
  }
)(Authors);
