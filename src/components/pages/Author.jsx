import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'curi-react';

import Showcase from 'components/Showcase';
import Breadcrumbs from 'components/Breadcrumbs';

function Author(props) {
  const { author, books } = props;

  return (
    <div>
      <Breadcrumbs>
        <Link to='Authors'>Authors</Link>
      </Breadcrumbs>
      <h1>{author}</h1>
      <Showcase books={books} />
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
