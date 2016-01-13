import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

import Showcase from "./Showcase";
import Breadcrumbs from "./Breadcrumbs";

const Author = React.createClass({
  breadcrumbs: function() {
    const paths = [
      {
        to: {pathname: "/"},
        title: "Home"
      },
      {
        to: {pathname: "/authors"},
        title: "Authors"
      }
    ];
    return (
      <Breadcrumbs paths={paths} />
    );
  },
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
        {this.breadcrumbs()}
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
