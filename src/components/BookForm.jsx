import React from "react";
import { connect } from "react-redux";

import { addBook } from "actions";
import genres from "constants/genres";

import "sass/form.scss";

const BookForm = React.createClass({
  propTypes: {
    author: React.PropTypes.string,
    genre: React.PropTypes.string,
    next: React.PropTypes.string
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  getInitialState: function() {
    return {
      title: "",
      author: "",
      genre: undefined
    };
  },
  validate: function() {
    return (this.state.title !== "" &&
      this.state.author !== "" &&
      this.state.genre !== -1);
  },
  save: function(event) {
    event.preventDefault();
    if ( this.validate() ) {
      // add the book and provide the next page that the router should
      // transition to
      this.props.addBook({
        title: this.state.title,
        author: this.state.author,
        genre: this.state.genre
      });
      this.context.router.push(this.props.next || "/");
    }
  },
  cancel: function(event) {
    event.preventDefault();
    this.context.router.push(this.props.next || "/");
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
  componentWillMount: function() {
    const { author, genre } = this.props;
    const newState = {};
    let values = false;
    if ( author !== undefined ) {
      newState.author = author;
      values = true;
    }
    if ( genre !== undefined ) {
      newState.genre = genre;
      values = true;
    }
    if ( values ) {
      this.setState(newState);
    }
  },
  render: function() {
    const { author, genre } = this.props;
    const authorInput = author !== undefined ? (
      this.props.author
    ) : (
      <input
        type="text"
        value={this.state.author}
        onChange={this.changeAuthor} />
    );

    const genreInput = genre !== undefined ? (
      <p>
        {this.props.genre}
      </p>
    ) : (
      <div className="genre-options">
        {
          genres.map((g, i) => {
            return (
              <label key={i}>
                <input
                  type="radio"
                  value={g}
                  name="genre"
                  onChange={this.changeGenre} />
                {g}
              </label>
            );
          })
        }
      </div>
    );

    return (
      <form onSubmit={this.save}>
        <p>
          Title: 
        </p>
        <p>
          <input
            type="text"
            value={this.state.title}
            onChange={this.changeTitle} />
        </p>
        <div>
          <p>
            Author(s):
          </p>
          <p>
            {authorInput}
          </p>
        </div>
        <div>
          Genre:
          {genreInput}
        </div>

        <button>Save</button>
        <button onClick={this.cancel} type="button">Cancel</button>
      </form>
    );
  }
});

export default connect(
  null,
  { addBook }
)(BookForm);
