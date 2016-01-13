import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

import Showcase from "./Showcase";

const Author = React.createClass({
  render: function() {
    const { author } = this.props.params;
    const filteredBooks = this.props.books.filter(book => book.author === author);
    // inserts such as the add book form
    const children = this.props.children ? (
      <div className="children">
        {this.props.children}
      </div>
    ) : null;
    return (
      <div>
        <div className="breadcrumbs">
          <Link to={{pathname: "/"}}>Home</Link>
          {" > "}
          <Link to={{pathname: "/authors"}}>Authors</Link>
        </div>
        <h1>{author}</h1>
        { children }
        <Showcase books={filteredBooks}
                  addPath={`/author/${author}/add`} />
      </div>
    );
  }
});

export default connect(
  state => ({books: state.books})
)(Author);
