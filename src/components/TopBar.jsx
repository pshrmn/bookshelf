import React from "react";
import { IndexLink, Link } from "react-router";

import genres from "constants/genres";

import "sass/header.scss";

const GenreBars = genres.map(genre => <li key={genre} className={genre.replace("'","")}></li> );

export default React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return false;
  },
  render: function() {
    return (
      <header>
        <ul>
          {GenreBars}
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
          {GenreBars}
        </ul>
      </header>
    );
  }
});
