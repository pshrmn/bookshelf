import React from "react";

export default React.createClass({
  render: function() {
    let { title, author, genre } = this.props;
    return (
      <div className="book">
        <div className="title">{title}</div>
        <div className="author">{author}</div>
      </div>
    );
  }
})
