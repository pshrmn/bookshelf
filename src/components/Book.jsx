import React from "react";

import { Link } from "react-router";

export default React.createClass({
  render: function() {
    let { title, author, genre } = this.props;
    let coverClasses = ["cover", genre.replace("'","")];
    if ( title.length )
    return (
      <div className="book" title={title}>
        <div className={coverClasses.join(" ")}>
          <div className="title">{title}</div>
        </div>
        <div className="author">
          <Link to={{pathname: `/author/${author}`}}>{author}</Link>
        </div>
      </div>
    );
  }
});
