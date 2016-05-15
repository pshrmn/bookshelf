import React from "react";

import BookForm from "./BookForm";

export default function AddBookByAuthor(props) {
  const { author } = props.params;
  return (
    <BookForm
      author={author}
      next={`/author/${author}`} />
  );
}
