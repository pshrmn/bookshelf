import React from "react";

import { genresByCount } from "helpers/counts";
import { genreMap } from 'constants/genres';

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
            const genre = genreMap[g.genre];
            const percent = (g.count / bookCount);
            return (
              <div
                key={genre.name}
                className={["genre", genre.className].join(" ")}
                style={{flexGrow: percent}}
                title={`${Math.floor(100*percent)}% of books are ${genre.name}`}>
              </div>
            );
          })
      }
    </div>
  );
}