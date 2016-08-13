import React from "react";
import { connect } from "react-redux";

import Breadcrumbs from "components/Breadcrumbs";
import Cover from "components/Cover";

import genres from "constants/genres";

import "sass/genres.scss";

const genres_breadcrumb_paths = [
  {
    to: {pathname: "/"},
    title: "Home"
  }
];

const GenresBreadcrumbs = <Breadcrumbs paths={genres_breadcrumb_paths} />;

export default function Genres(props) {
  const genreLis = genres.map((g,i) =>
    <li key={i}>
      <Cover title={g.name} classes={[g.className]} path={{pathname: `/genre/${g.name}`}}/>
    </li>
  );
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
