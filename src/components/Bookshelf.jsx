import React from "react";

import Book from "./Book";
import BookForm from "./BookForm";
import TopBar from "./TopBar";
import Stats from "./Stats";

import bookLoader from "../bookLoader";
import genres from "../constants/genres";

export default React.createClass({
  getInitialState: function() {
    return {
      books: [],
      show: 5,
      more: false,
      adding: false
    }
  },
  showMore: function(event) {
    event.preventDefault();
    let newShow = this.state.show + 5;
    this.setState({
      show: newShow,
      more: newShow < this.state.books.length
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
  render: function() {
    let { books } = this.state;
    let bookTiles = books.slice(0, this.state.show).map((b, i) => {
      return <Book key={i} index={i%10} {...b} />;
    })
    let more = this.state.more ? (
      <button onClick={this.showMore}>Show More</button>
      ) : null;
    let addABook = (
      <div className="book">
        <div className="cover add" onClick={this.showAddBook} >Add A Book</div>
      </div>
    );
    let form = this.state.adding ? (
      <BookForm save={this.saveBook} cancel={this.cancelBook} />
      ) : null;
    return (
      <div className="bookshelf">
        <TopBar genres={genres} />
        <div className="main">
          <Stats books={books} />
          <div className="showcase">
            <p>
              Showing {bookTiles.length} out of {books.length} books {more}
            </p>
            <div className="books">
              {bookTiles}
              {addABook}
            </div>
            
            {form}
          </div>
          
        </div>
      </div>
    );
  },
  componentDidMount: function() {
    bookLoader("data/books.json")
      .then(resp => {
        this.setState({
          books: resp.books,
          show: 5,
          more: resp.books.length > 5
        })
      });
  }
});
