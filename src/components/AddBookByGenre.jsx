import React from "react";

import BookForm from "./BookForm";

export default function AddBookByGenre(props) {
  const { genre } = props.params;
  return (
    <BookForm
      genre={genre}
      next={`/genre/${genre}`} />
  );
}
