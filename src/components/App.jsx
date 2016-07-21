import React from "react";

import TopBar from "./TopBar";
import Footer from "./Footer";

export default function App(props) {
  return (
    <div>
      <TopBar />
      <div className="main">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}
