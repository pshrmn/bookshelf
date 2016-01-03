import React from "react";
import ReactDOM from "react-dom";

import Bookshelf from "./components/Bookshelf";
import genres from "./constants/genres";

ReactDOM.render(
  <Bookshelf genres={genres}/>,
  document.getElementById("content")
);