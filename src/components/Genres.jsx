import React from "react";
import { connect } from "react-redux";

import genres from "../constants/genres";
import Breadcrumbs from "./Breadcrumbs";
import Cover from "./Cover";

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
      const cleanGenre = g.replace("'", "");
      return (
        <li key={i}>
          <Cover title={g} classes={[cleanGenre]} path={{pathname: `/genre/${g}`}}/>
        </li>
      );
    });
    return (
      <div>
        {this.breadcrumbs()}
        <h1>Genres</h1>
        <ul className="genres">
          {genreLis}
        </ul>
      </div>
    );
  }
});
