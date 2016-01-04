import React from "react";

export default React.createClass({
  render: function() {
    let { genres, filter } = this.props;
    let allGenres = (
      <li className={["key","all", filter===-1 ? "active" : ""].join(" ")}>
        <label>
          all
          <input type="radio" name="genre" value="-1" onChange={this.props.setFilter}/>
        </label>
      </li>
    );
    let genreOptions = genres.map((g, i) => {
      let classes=["key", g.replace("'",""), filter===i ? "active" : ""]
      return (
        <li key={i} className={classes.join(" ")}>
          <label>
            {g}
            <input type="radio" name="genre" value={i} onChange={this.props.setFilter}/>
          </label>
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