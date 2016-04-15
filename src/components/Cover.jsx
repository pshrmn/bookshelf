import React from "react";
import { Link } from "react-router";

export default React.createClass({
  render: function() {
    const {
      classes = [],
      title,
      path
    } = this.props;
    const coverClasses = ["cover"].concat(classes);
    const baseCover = (
      <div className={coverClasses.join(' ')}>
        <div className="title">
          {title}
        </div>
      </div>
    );
    return path === undefined ? baseCover : (
      <Link to={path}>{baseCover}</Link>
    );
  }
});
