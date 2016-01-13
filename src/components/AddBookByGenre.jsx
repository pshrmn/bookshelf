import React from "react";

import BookForm from "./BookForm";

export default React.createClass({
  render: function() {
    const { genre } = this.props.params;
    return (
      <BookForm genre={genre}
                next={`/genre/${genre}`} />
    );
  }
});
