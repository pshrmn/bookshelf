import React from 'react';

import Showcase from 'components/Showcase';
import Breadcrumbs from 'components/Breadcrumbs';

export default function Author(props) {
  const { author, books } = props.data;

  return (
    <div>
      <Breadcrumbs name='Author' />
      <h1>{author}</h1>
      <Showcase books={books} />
    </div>
  );
}
