import React from "react";
import { connect } from "react-redux";

import Stats from "./Stats";
import Showcase from "./Showcase";

const Index = React.createClass({
  render: function() {
    const { books } = this.props;
    return (
      <div>
        <Stats books={books} />
        <Showcase books={books}
                  addPath="/add" />
      </div>
    );
  }
});

export default connect(
  state => ({books: state.books})
)(Index);
