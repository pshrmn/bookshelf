import React from "react";
import { Link } from "react-router";

import Book from "./Book";
import Cover from "./Cover";

export default React.createClass({
  getInitialState: function() {
    return {
      show: 20
    };
  },
  showMore: function() {
    this.setState({
      show: this.state.show+10
    });
  },
  render: function() {
    const { books, addPath } = this.props;
    const { show } = this.state;

    const bookTiles = books.slice(0, show).map((b, i) => {
      return <Book key={i} index={i%10} {...b} />;
    });
    const more = books.length > show ? (
      <button onClick={this.showMore}>Show More</button>
    ) : null;

    return (
      <div className="showcase">
        <p className="info">
          Showing {bookTiles.length} out of {books.length} books {more}
        </p>
        <div className="books">
          {bookTiles}
          <div className="book">
            <Cover classes={["add"]} path={{pathname: addPath}} title="Add A Book" />
          </div>
        </div>
      </div>
    );
  }
});
