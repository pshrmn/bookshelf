import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

import Breadcrumbs from "./Breadcrumbs";
import genres from "../constants/genres";

export default React.createClass({
  breadcrumbs: function() {
    const paths = [
      {
        to: {pathname: "/"},
        title: "Home"
      }
    ];
    return (
      <Breadcrumbs paths={paths} />
    );
  },
  render: function() {
    const genreLis = genres.map((g,i) => {
      return (
        <li key={i}>
          <Link to={{pathname: `/genre/${g}`}}>{g}</Link>
        </li>
      );
    });
    return (
      <div>
        {this.breadcrumbs()}
        <h1>Genres</h1>
        <ul>
          {genreLis}
        </ul>
      </div>
    );
  }
});
