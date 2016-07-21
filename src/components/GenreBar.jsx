import React from "react";

import { genresByCount } from "helpers/counts";

/*
 * A bar made up of blocks for each genre where each block's width
 * is determined by the percent of total books that are that genre
 */
export default function GenreBar(props) {
  const { books } = props;
  const bookCount = books.length;

  return (
    <div className="genre-bar">
      {
        genresByCount(books)
          .map(g => {
            const percent = (g.count / bookCount);
            return (
              <div
                key={g.genre}
                className={["genre", g.genre.replace("'", "")].join(" ")}
                style={{flexGrow: percent}}
                title={`${Math.floor(100*percent)}% of books are ${g.genre}`}>
              </div>
            );
          })
      }
    </div>
  );
}