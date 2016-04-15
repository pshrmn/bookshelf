import React from "react";
import { Link } from "react-router";

import Cover from "./Cover";

export default React.createClass({
  render: function() {
    const { title, author, genre } = this.props;
    const cleanGenre = genre.replace("'", "");
    return (
      <div className="book" title={title}>
        <Cover classes={[cleanGenre]} title={title} />
        <div className="author">
          <Link to={{pathname: `/author/${author}`}}>{author}</Link>
        </div>
      </div>
    );
  }
});
