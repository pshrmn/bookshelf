import React from "react";
import { connect } from "react-redux";

import Stats from "components/Stats";
import Showcase from "components/Showcase";

function Index(props) {
  const { books } = props;
  return (
    <div>
      <Stats books={books} />
      <Showcase
        books={books}
        addPath="/add" />
    </div>
  );
}

export default connect(
  state => ({books: state.books})
)(Index);
