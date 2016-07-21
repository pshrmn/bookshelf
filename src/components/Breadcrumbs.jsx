import React from "react";
import { Link } from "react-router";

import "sass/breadcrumbs.scss";

export default function Breadcrumbs(props){
  return (
    <div className="breadcrumbs">
      {
        props.paths.map((p,i) => <Link key={i} to={p.to}>{p.title}</Link>)
      }
    </div>
  );
}
