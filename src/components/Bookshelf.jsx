import React from "react";

import BookForm from "./BookForm";
import TopBar from "./TopBar";
import Showcase from "./Showcase";
import Stats from "./Stats";

import bookLoader from "../bookLoader";

export default React.createClass({
  getInitialState: function() {
    return {
      books: [],
      show: 5,
      adding: false,
      filter: -1
    }
  },
  showMore: function(event) {
    event.preventDefault();
    let newShow = this.state.show + 5;
    this.setState({
      show: newShow
    });
  },
  showAddBook: function(event) {
    this.setState({
      adding: true
    })
  },
  cancelBook: function() {
    this.setState({
      adding: false
    });
  },
  saveBook: function(book) {
    this.setState({
      // add the book to the beginning
      books: [book].concat(this.state.books),
      show: this.state.show + 1,
      adding: false
    });
  },
  setFilter: function(event) {
    this.setState({
      filter: parseInt(event.target.value, 10)
    });
  },
  render: function() {
    let { books, show, adding, filter } = this.state;
    let { genres } = this.props;

    let allGenres = (
      <li className={["key","all", filter===-1 ? "active" : ""].join(" ")}>
        <label>
          all
          <input type="radio" name="genre" value="-1" onChange={this.setFilter}/>
        </label>
      </li>
    );
    let genreOptions = genres.map((g, i) => {
      let classes=["key", g.replace("'",""), filter===i ? "active" : ""]
      return (
        <li key={i} className={classes.join(" ")}>
          <label>
            {g}
            <input type="radio" name="genre" value={i} onChange={this.setFilter}/>
          </label>
        </li>
      );
    });

    books = books.filter(b => {
      if ( filter === -1 ) {
        return true;
      } else {
        return b.genre === genres[filter];
      }
    });

    return (
      <div className="bookshelf">
        <TopBar genres={genres} />
        <div className="main">
          <div className="filterer">
            <h4>Filter By Genre:</h4>
            <ul className="keyholder">
              {allGenres}
              {genreOptions}
            </ul>
          </div>
          <Stats books={books} />
          <Showcase books={books}
                    genres={genres}
                    show={show}
                    addBook={this.showAddBook}
                    showMore={this.showMore} />
          {adding ? (
            <BookForm save={this.saveBook} cancel={this.cancelBook} />
          ) : null}
        </div>
      </div>
    );
  },
  componentDidMount: function() {
    bookLoader("data/books.json")
      .then(resp => {
        this.setState({
          books: resp.books,
          show: 5
        })
      });
  }
});
