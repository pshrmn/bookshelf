import React from "react";
import { connect } from "react-redux";

import TopBar from "./TopBar";

const App = React.createClass({
  childContextTypes: {
    books: React.PropTypes.array,
    genres: React.PropTypes.array
  },
  getDefaultProps: function() {
    return {
      books: [],
      genres: []
    };
  },
  getChildContext: function() {
    return {
      books: this.props.books,
      genres: this.props.genres
    };
  },
  render: function() {
    const { genres } = this.props;
    return (
      <div>
        <TopBar genres={genres} />
        <div className="main">
          {this.props.children}
        </div>
        <footer>
          made by <a href="http://www.pshrmn.com">pshrmn.com</a>
        </footer>
      </div>
    );
  }
});

export default connect(
  state => ({books: state.books, genres: state.genres})
)(App);
