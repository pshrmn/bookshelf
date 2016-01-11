import React from "react";

import Showcase from "./Showcase";
import GenreFilter from "./GenreFilter";
import Stats from "./Stats";

export default React.createClass({
  contextTypes: {
    books: React.PropTypes.array
  },
  render: function() {
    let { books } = this.context;

    return (
      <div className="index">
        <GenreFilter filter="all" />
        <Stats books={books} />
        <Showcase books={books} />
      </div>
    );
  }
});
