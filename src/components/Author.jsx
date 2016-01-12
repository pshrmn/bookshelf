import React from "react";

import Showcase from "./Showcase";

export default React.createClass({
  contextTypes: {
    books: React.PropTypes.array
  },
  render: function() {
    const { author } = this.props.params;
    const filteredBooks = this.context.books.filter(book => book.author === author);
    return (
      <div className="book-author">
        <h1>{author}</h1>
        <Showcase books={filteredBooks} />
      </div>
    );
  }
})