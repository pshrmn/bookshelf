import React from "react";

import genres from "../constants/genres";

export default React.createClass({
  getInitialState: function() {
    return {
      title: "",
      author: "",
      genre: -1
    };
  },
  validate: function() {
    return (this.state.title !== "" && this.state.author !== "" && this.state.genre !== -1);
  },
  save: function(event) {
    event.preventDefault();
    if ( this.validate() ) {
      this.props.save({
        title: this.state.title,
        author: this.state.author,
        genre: genres[this.state.genre]
      });
      
    }
  },
  cancel: function(event) {
    event.preventDefault();
    this.props.cancel();
  },
  changeTitle: function(event) {
    this.setState({
      title: event.target.value
    });
  },
  changeAuthor: function(event) {
    this.setState({
      author: event.target.value
    });
  },
  changeGenre: function(event) {
    this.setState({
      genre: event.target.value
    });
  },
  render: function() {
    let genreOptions = genres.map((g, i) => {
      return (
        <label key={i}>
          <input type="radio"
                 value={i}
                 name="genre"
                 onChange={this.changeGenre} />
          {g}
        </label>
      );
    })
    return (
      <form onSubmit={this.save}>
        <label>
          Title: <input type="text"
                       value={this.state.title}
                       onChange={this.changeTitle} />
        </label>
        <label>
          Author(s): <input type="text"
                            value={this.state.author}
                            onChange={this.changeAuthor} />
        </label>
        <div>
          Genre: {genreOptions}
        </div>
        <button>Save</button>
        <button onClick={this.cancel}>Cancel</button>
      </form>
    );
  }
});
