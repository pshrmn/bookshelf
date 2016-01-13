import React from "react";
import { Link } from "react-router";

export default React.createClass({
  render: function() {
    const pathLinks = this.props.paths.map((p,i) => {
      return (
        <Link key={i} to={p.to}>{p.title}</Link>
      );
    });
    return (
      <div className="breadcrumbs">
        {pathLinks}
      </div>
    );
  }  
});
