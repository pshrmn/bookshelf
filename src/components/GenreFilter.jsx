import React from "react";

import { connect } from "react-redux";
import { push } from "redux-simple-router";
import genres from "../constants/genres";

const GenreFilter = React.createClass({
  changeHandler: function(event) {
    event.preventDefault();
    const genre = event.target.value;
    const url = genre === "all" ? "/" : `genre/${event.target.value}`;
    this.props.push(url);
  },
  render: function() {
    const { filter } = this.props;
    const genreOptions = ["all"].concat(genres).map((g, i) => {
      return (
        <option key={i}
                value={g} >
          {g}
        </option>
      );
    });
    return (
        <select value={filter}
                onChange={this.changeHandler}>
          {genreOptions}
        </select>
    );
  }
});

export default connect(
  null,
  { push }
)(GenreFilter);