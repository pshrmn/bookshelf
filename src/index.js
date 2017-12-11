import React from 'react';
import ReactDOM from 'react-dom';
import Hash from '@hickory/hash';
import createConfig from '@curi/core';
import { Navigator } from '@curi/react';
import createAncestors from '@curi/addon-ancestors';
import createTitleSideEffect from'@curi/side-effect-title';

import routes from './routes';
import renderFunction from './renderFunction';

import 'sass/index.scss';

const history = Hash();
const setTitle = createTitleSideEffect({ suffix: 'Bookshelf', delimiter: '|' });

const config = createConfig(history, routes, {
  addons: [ createAncestors() ],
  sideEffects: [
    { fn: setTitle }
  ]
});

const root = document.getElementById('root');
config.respond((response, action) => {
  ReactDOM.render((
    <Navigator
      response={response}
      action={action}
      config={config}
      render={renderFunction}
    />
  ), root);
});
