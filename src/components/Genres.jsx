import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

import genres from "../constants/genres";

export default React.createClass({
  render: function() {
    const genreLis = genres.map((g,i) => {
      return (
        <li key={i}>
          <Link to={{pathname: `genre/${g}`}}>{g}</Link>
        </li>
      );
    });
    return (
      <div>
        <div className="breadcrumbs">
          <Link to={{pathname: "/"}}>Home</Link>
        </div>
        <h1>Genres</h1>
        <ul>
          {genreLis}
        </ul>
      </div>
    );
  }
});
