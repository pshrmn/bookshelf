import React from "react";
import { Link } from "react-router";

import Showcase from "./Showcase";

export default React.createClass({
  contextTypes: {
    books: React.PropTypes.array
  },
  render: function() {
    const { author } = this.props.params;
    const filteredBooks = this.context.books.filter(book => book.author === author);
    return (
      <div>
        <div className="breadcrumbs">
          <Link to={{pathname: "/"}}>Home</Link>
          {" > "}
          <Link to={{pathname: "/authors"}}>Authors</Link>
        </div>
        <h1>{author}</h1>
        <div>
          <Link to={{pathname: "/"}}>Home</Link>
        </div>
        <Showcase books={filteredBooks} />
      </div>
    );
  }
})