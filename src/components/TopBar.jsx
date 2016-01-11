import React from "react";

import { Link } from "react-router";

export default React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return false;
  },
  render: function() {
    let genreBars = this.props.genres.map((g, i) => {
      return (
        <li key={i}
            className={g.replace("'","")}></li>
      );
    });
    return (
      <div className="topbar">
        <ul>
          {genreBars}
        </ul>
        <div className="title">
          <Link to={{pathname: "/"}}>Bookshelf</Link>
        </div>
        <div className="subtitle">
          Track books that you have read.
        </div>
        <ul>
          {genreBars}
        </ul>
      </div>
    );
  }
});