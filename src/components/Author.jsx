import React from "react";
import { connect } from "react-redux";

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
    const { author, books } = this.props;
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
        <Showcase books={books}
                  addPath={`/author/${author}/add`} />
      </div>
    );
  }
});

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
