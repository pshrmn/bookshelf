import React from "react";
import { Link } from "react-router";

export default function Breadcrumbs(props){
  const pathLinks = props.paths.map((p,i) => <Link key={i} to={p.to}>{p.title}</Link> );
  return (
    <div className="breadcrumbs">
      {pathLinks}
    </div>
  );
}
