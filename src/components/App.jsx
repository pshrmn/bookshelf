import React from "react";

import TopBar from "./TopBar";

import bookLoader from "../bookLoader";
import genres from "../constants/genres";

export default React.createClass({
  childContextTypes: {
    books: React.PropTypes.array,
    genres: React.PropTypes.array
  },
  getChildContext: function() {
    return {
      books: this.state.books,
      genres: this.state.genres
    };
  },
  getInitialState: function() {
    return {
      books: [],
      genres: []
    };
  },
  render: function() {
    return (
      <div>
        <TopBar genres={genres} />
        {this.props.children}
      </div>
    );
  },
  componentDidMount: function() {
    bookLoader("data/books.json")
      .then(resp => {
        this.setState({
          books: resp.books,
          genres: genres
        })
      });
  }
});
