import React from "react";

import TopBar from "./TopBar";

export default function App(props) {
  return (
    <div>
      <TopBar />
      <div className="main">
        {props.children}
      </div>
      <footer>
        made by <a href="http://www.pshrmn.com">pshrmn.com</a>
      </footer>
    </div>
  );
}
