import React from "react";
import { Link } from "react-router";

import "sass/_cover.scss";

export default function Cover(props) {
  const {
    classes = [],
    title,
    path
  } = props;
  const coverClasses = ["cover"].concat(classes);
  const baseCover = (
    <div className={coverClasses.join(' ')}>
      <div className="title">
        {title}
      </div>
    </div>
  );
  // when a path is provided, wrap the cover in a Link
  return path === undefined ? baseCover : (
    <Link to={path}>{baseCover}</Link>
  );
}
