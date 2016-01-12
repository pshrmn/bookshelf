import React from "react";

import GenreFilter from "./GenreFilter";
import Stats from "./Stats";
import Showcase from "./Showcase";

export default React.createClass({
  contextTypes: {
    books: React.PropTypes.array
  },
  render: function() {
    const { genre } = this.props.params;
    const filteredBooks = this.context.books.filter(book => book.genre === genre);
    return (
      <div>
        <h1>{genre}</h1>
        <GenreFilter filter={genre} />
        <Stats books={filteredBooks} />
        <Showcase books={filteredBooks} />
      </div>
    );
  }
})