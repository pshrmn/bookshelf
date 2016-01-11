import React from "react";

import BookForm from "./BookForm";

export default React.createClass({
  render: function() {
    return (
      <div>
        <p>
          Note: This is not implemented right now. It will be implemented when redux-simple-router is used.
        </p>
        <BookForm />
      </div>
    );
  }
})