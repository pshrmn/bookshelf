import React from "react";
import { connect } from "react-redux";

import genres from "constants/genres";
import Breadcrumbs from "./Breadcrumbs";
import Cover from "./Cover";

const genres_breadcrumb_paths = [
  {
    to: {pathname: "/"},
    title: "Home"
  }
];

const GenresBreadcrumbs = <Breadcrumbs paths={genres_breadcrumb_paths} />;

export default function Genres(props) {
  const genreLis = genres.map((g,i) => {
    const cleanGenre = g.replace("'", "");
    return (
      <li key={i}>
        <Cover title={g} classes={[cleanGenre]} path={{pathname: `/genre/${g}`}}/>
      </li>
    );
  });
  return (
    <div>
      {GenresBreadcrumbs}
      <h1>Genres</h1>
      <ul className="genres">
        {genreLis}
      </ul>
    </div>
  );
}
