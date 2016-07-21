import React from "react";
import { Link } from "react-router";

import Book from "./Book";
import Cover from "./Cover";
import GenreBar from "./GenreBar";

export default function showcase(props) {
  const { books, addPath } = props;

  return (
    <div className="showcase">
      <div className="info">
        {books.length} Books
        <GenreBar books={books} />
      </div>
      <div className="books">
        <div className="book">
          <Cover classes={["add"]} path={{pathname: addPath}} title="Add A Book" />
        </div>
        {
          books.map((b, i) => <Book key={i} index={i%10} {...b} />)
        }
      </div>
    </div>
  );
}