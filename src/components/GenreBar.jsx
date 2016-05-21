import React from "react";

export default function GenreBar(props) {
  const { books } = props;
  const bookCount = books.length;
  const genreCounts = books
    .reduce((genres, book) => {
      const genre = book.genre;
      if ( genres[genre] !== undefined ) {
        genres[genre] += 1;
      } else {
        genres[genre] = 1;
      }
      return genres;
    }, {});
  const bars = Object.keys(genreCounts).map(g => {
    const count = genreCounts[g];
    const percent = (count / bookCount);
    const classNames = ["genre", g.replace("'", "")];
    return (
      <div
        className={classNames.join(" ")}
        style={{flexGrow: percent}} >
      </div>
    );
  });
  return (
    <div className="genre-bar">
      { bars }
    </div>
  );
}