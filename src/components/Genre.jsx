import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

import Stats from "./Stats";
import Showcase from "./Showcase";
import Breadcrumbs from "./Breadcrumbs";

const Genre = React.createClass({
  breadcrumbs: function() {
    const paths = [
      {
        to: {pathname: "/"},
        title: "Home"
      },
      {
        to: {pathname: "/genres"},
        title: "Genres"
      }
    ];
    return (
      <Breadcrumbs paths={paths} />
    );
  },
  render: function() {
    const { genre, books } = this.props;
    // inserts such as the add book form
    const children = this.props.children ? (
      <div className="children">
        {this.props.children}
      </div>
    ) : null;
    return (
      <div className="genre-page">
        {this.breadcrumbs()}
        <h1>
          {genre} Books
        </h1>
        {children}
        <Stats books={books} />
        <Showcase books={books}
                  addPath={`/genre/${genre}/add`} />
      </div>
    );
  }
});

export default connect(
  (state, ownProps) => {
    const { genre } = ownProps.params;
    return {
      genre: genre,
      books: state.books.filter(book => book.genre === genre)
    }
  }
)(Genre);
