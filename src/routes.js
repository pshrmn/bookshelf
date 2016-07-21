import App from "components/App";
import Index from "components/Index";
import AddBook from "components/AddBook";

import Genres from "components/Genres";
import Genre from "components/Genre";
import AddBookByGenre from "components/AddBookByGenre";

import Authors from "components/Authors";
import Author from "components/Author";
import AddBookByAuthor from "components/AddBookByAuthor";

export default [{
  path: "/",
  component: App,
  indexRoute: {component: Index},
  childRoutes: [
    {
      path: "add",
      component: AddBook
    },
    {
      path: "genres",
      component: Genres
    },
    {
      path: "genre/:genre",
      component: Genre,
      childRoutes: [
        {
          path: "add",
          component: AddBookByGenre
        }
      ]
    },
    {
      path: "authors",
      component: Authors
    },
    {
      path: "author/:author",
      component: Author,
      childRoutes: [
        {
          path: "add",
          component: AddBookByAuthor
        }
      ]
    }
  ]
}];
