import React from "react";

import TopBar from "./TopBar";
import Showcase from "./Showcase";
import Stats from "./Stats";
import GenreFilter from "./GenreFilter";

import bookLoader from "../bookLoader";

export default React.createClass({
  getInitialState: function() {
    return {
      books: [],
      show: 10,
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
          <GenreFilter genres={genres}
                       filter={filter}
                       setFilter={this.setFilter} />
          
          <Stats books={books} />
          <Showcase books={books}
                    genres={genres}
                    show={show}
                    addBook={this.showAddBook}
                    showMore={this.showMore} />
        </div>
        <footer>
          made by <a href="http://www.pshrmn.com">pshrmn.com</a>
        </footer>
      </div>
    );
  },
  componentDidMount: function() {
    bookLoader("data/books.json")
      .then(resp => {
        this.setState({
          books: resp.books,
          show: 10
        })
      });
  }
});
