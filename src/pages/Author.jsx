import React from 'react';
import { connect } from 'react-redux';

import Showcase from 'components/Showcase';
import Breadcrumbs from 'components/Breadcrumbs';

const author_breadcrumb_paths = [
  {
    to: {pathname: '/'},
    title: 'Home'
  },
  {
    to: {pathname: '/authors'},
    title: 'Authors'
  }
];

const AuthorBreadcrumbs = <Breadcrumbs paths={author_breadcrumb_paths} />;

function Author(props) {
  const { author, books, children } = props;

  return (
    <div>
      {AuthorBreadcrumbs}
      <h1>{author}</h1>
      {
        children ? (
          <div className='children'>
            {children}
          </div>
        ) : null
      }
      <Showcase
        books={books}
        addPath={`/author/${author}/add`} />
    </div>
  );
}

export default connect(
  (state, ownProps) => {
    // access the author param using ownProps
    const { author } = ownProps.params;
    return {
      author: author,
      books: state.books.filter(book => book.author === author)
    }
  }
)(Author);
