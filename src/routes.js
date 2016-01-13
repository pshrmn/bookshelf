import App from "./components/App";
import Index from "./components/Index";
import AddBook from "./components/AddBook";
import Genres from "./components/Genres";
import Genre from "./components/Genre";
import Authors from "./components/Authors";
import Author from "./components/Author";

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
      component: Genre
    },
    {
      path: "authors",
      component: Authors
    },
    {
      path: "author/:author",
      component: Author
    }
  ]
}];
