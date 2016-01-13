import React from "react";

import BookForm from "./BookForm";

export default React.createClass({
  render: function() {
    const { author } = this.props.params;
    return (
      <BookForm author={author}
                next={`/author/${author}`} />
    );
  }
});
