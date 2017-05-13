import React from 'react';
import { Link } from 'curi-react';

import 'sass/breadcrumbs.scss';

export default function Breadcrumbs(props){
  return (
    <div className='breadcrumbs'>
      {props.children}
    </div>
  );
}
