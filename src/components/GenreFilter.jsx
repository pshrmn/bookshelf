import React from "react";

import { Link } from "react-router";

export default React.createClass({
  contextTypes: {
    genres: React.PropTypes.array
  },
  render: function() {
    let { genres } = this.context;
    genres = genres || [];
    let { filter } = this.props;
    let allGenres = (
      <li className={["key","all", filter==="all" ? "active" : ""].join(" ")}>
          <Link to={{pathname: "/"}}>all</Link>
      </li>
    );
    let genreOptions = genres.map((g, i) => {
      let classes=["key", g.replace("'",""), filter===g ? "active" : ""]
      return (
        <li key={i} className={classes.join(" ")}>
            <Link to={{pathname: `/genre/${g}`}}>{g}</Link>
        </li>
      );
    });
    return (
      <div className="filterer">
        <h4>Filter By Genre:</h4>
        <ul className="keyholder">
          {allGenres}
          {genreOptions}
        </ul>
      </div>
    );
  }
})