import React from "react";
import { connect } from "react-redux";

import TopBar from "./TopBar";

const App = React.createClass({
  childContextTypes: {
    books: React.PropTypes.array
  },
  getDefaultProps: function() {
    return {
      books: []
    };
  },
  getChildContext: function() {
    return {
      books: this.props.books
    };
  },
  render: function() {
    return (
      <div>
        <TopBar />
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
  state => ({books: state.books})
)(App);
