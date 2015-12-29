import React from "react";

import Book from "./Book";
import BookForm from "./BookForm";
import bookLoader from "../bookLoader";

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
    let books = this.state.books.slice(0, this.state.show).map((b, i) => {
      return <Book key={i} {...b} />;
    })
    let more = this.state.more ? (
      <a href="#" onClick={this.showMore}>Show More</a>
      ) : null;
    let addABook = (
      <div className="book add" onClick={this.showAddBook} >Add A Book</div>
    );
    let form = this.state.adding ? (
      <BookForm save={this.saveBook} cancel={this.cancelBook} />
      ) : null;
    return (
      <div className="bookshelf">
        <div className="books">
          {books}
          {addABook}
        </div>
        {more}
        {form}
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
