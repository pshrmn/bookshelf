import React from "react";
import { connect } from "react-redux";
import { push } from "redux-simple-router";

import { addBook } from "../actions";

const AddBook = React.createClass({
  contextTypes: {
    genres: React.PropTypes.array
  },
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
      // add the book, then transition to the root page
      this.props.addBook({
        title: this.state.title,
        author: this.state.author,
        genre: this.context.genres[this.state.genre]
      });
      this.props.push("/");
    }
  },
  cancel: function(event) {
    event.preventDefault();
    this.props.push("/");
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
    let genreOptions = this.context.genres.map((g, i) => {
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
        <p>
          Title: 
        </p>
        <p>
          <input type="text"
                         value={this.state.title}
                         onChange={this.changeTitle} />
        </p>
        <p>
          Author(s):
        </p>
        <p>
          <input type="text"
                 value={this.state.author}
                 onChange={this.changeAuthor} />
        </p>
        <div>
          Genre:
          <div className="genre-options">
            {genreOptions}
          </div>
        </div>
        <button>Save</button>
        <button onClick={this.cancel}>Cancel</button>
      </form>
    );
  }
});

export default connect(
  null,
  { addBook, push }
)(AddBook);

