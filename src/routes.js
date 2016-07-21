import App from "pages/App";
import Index from "pages/Index";
import AddBook from "pages/AddBook";

import Genres from "pages/Genres";
import Genre from "pages/Genre";
import AddBookByGenre from "pages/AddBookByGenre";

import Authors from "pages/Authors";
import Author from "pages/Author";
import AddBookByAuthor from "pages/AddBookByAuthor";

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
