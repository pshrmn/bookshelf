import React from "react";

import TopBar from "./TopBar";

export default React.createClass({
  render: function() {
    return (
      <div>
        <TopBar />
        <div className="main">
          {this.props.children}
        </div>
        <footer>
          made by <a href="http://www.pshrmn.com">pshrmn.com</a>
        </footer>
      </div>
    );
  }
});
