import App from "./components/App";
import Index from "./components/Index";
import AddBook from "./components/AddBook";
import Genre from "./components/Genre";

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
      path: "genre/:genre",
      component: Genre
    }
  ]
}];
