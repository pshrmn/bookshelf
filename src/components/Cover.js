import React from 'react';
import { Link } from '@curi/react';

import 'sass/cover.scss';

export default function Cover(props) {
  const {
    classes = [],
    title,
    path
  } = props;
  const coverClasses = ['cover'].concat(classes);
  return (
    <div className={coverClasses.join(' ')}>
      <div className='title'>
        {title}
      </div>
    </div>
  );
}
