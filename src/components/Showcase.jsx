import React from "react";

import Book from "./Book";
import { Link } from "react-router";

export default React.createClass({
  getInitialState: function() {
    return {
      show: 10
    };
  },
  showMore: function() {
    this.setState({
      show: this.state.show+10
    });
  },
  render: function() {
    let { books } = this.props;
    let { show } = this.state;

    let bookTiles = books.slice(0, show).map((b, i) => {
      return <Book key={i} index={i%10} {...b} />;
    });
    let more = books.length > show ? (
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
            <div className="cover add">
              <Link to={{pathname: "/add"}}>Add A Book</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
