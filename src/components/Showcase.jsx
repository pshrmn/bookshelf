import React from "react";

import Book from "./Book";

export default React.createClass({
  render: function() {
    let { books, show, genres} = this.props;

    let bookTiles = books.slice(0, show).map((b, i) => {
      return <Book key={i} index={i%10} {...b} />;
    });
    let more = books.length > show ? (
      <button onClick={this.props.showMore}>Show More</button>
    ) : null;

    return (
      <div className="showcase">
        <p className="info">
          Showing {bookTiles.length} out of {books.length} books {more}
        </p>
        <div className="books">
          {bookTiles}
          <div className="book">
            <div className="cover add" onClick={this.props.addBook} >Add A Book</div>
          </div>
        </div>
      </div>
    );
  }
});
