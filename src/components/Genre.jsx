import React from "react";
import { Link } from "react-router";

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
      <div className="genre-page">
        <div className="breadcrumbs">
          <Link to={{pathname: "/"}}>Home</Link>
          {" > "}
          <Link to={{pathname: "/genres"}}>Genres</Link>
        </div>
        <h1>
          {genre} Books
        </h1>
        <Stats books={filteredBooks} />
        <Showcase books={filteredBooks} />
      </div>
    );
  }
})