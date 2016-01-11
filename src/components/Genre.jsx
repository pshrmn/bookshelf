import React from "react";

import Showcase from "./Showcase";
import GenreFilter from "./GenreFilter";
import Stats from "./Stats";

export default React.createClass({
  contextTypes: {
    books: React.PropTypes.array
  },
  getInitialState: function() {
    return {
      show: 10
    }
  },
  render: function() {
    let { genre } = this.props.params;
    const filteredBooks = this.context.books.filter(book => book.genre === genre);
    return (
      <div className="genre">
        <GenreFilter filter={genre} />
        <Stats books={filteredBooks} />
        <Showcase books={filteredBooks} />
      </div>
    );
  }
})