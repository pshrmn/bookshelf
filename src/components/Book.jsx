import React from "react";

export default React.createClass({
  render: function() {
    let { title, author, genre } = this.props;
    return (
      <div className="book">
        <div className="cover">
          <div className="title">{title}</div>
        </div>
        <div className="author">{author}</div>
      </div>
    );
  }
});
