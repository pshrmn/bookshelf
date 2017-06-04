import React from 'react';
import { curious, Link } from 'curi-react';

import 'sass/breadcrumbs.scss';

const Breadcrumbs = ({ name, curi }) => (
  <div className='breadcrumbs'>
    {
      curi.addons.ancestors(name).reverse().map(a => (
        <Link key={a} to={a}>{a}</Link>
      ))
    }
  </div>
);

export default curious(Breadcrumbs);
