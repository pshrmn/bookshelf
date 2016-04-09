import React from "react";
import { IndexLink, Link } from "react-router";

import genres from "../constants/genres";

export default React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return false;
  },
  render: function() {
    let genreBars = genres.map((g, i) => {
      return (
        <li key={i}
            className={g.replace("'","")}></li>
      );
    });
    return (
      <header>
        <ul>
          {genreBars}
        </ul>
        <div className="title">
          <IndexLink to={{pathname: "/"}} title="home">Bookshelf</IndexLink>
        </div>
        <div className="subtitle">
          Track books that you have read.
        </div>
        <nav>
          <Link to={{pathname: "/"}}>Home</Link>
          <Link to={{pathname: "/genres"}}>Genres</Link>
          <Link to={{pathname: "/authors"}}>Authors</Link>
        </nav>
        <ul>
          {genreBars}
        </ul>
      </header>
    );
  }
});
