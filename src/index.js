import React from 'react';
import ReactDOM from 'react-dom';
import Hash from '@hickory/hash';
import createConfig from '@curi/core';
import { Navigator } from '@curi/react';
import createAncestors from '@curi/addon-ancestors';

import routes from './routes';
import renderFunction from './renderFunction';

import 'sass/index.scss';

const history = Hash();
const config = createConfig(history, routes, {
  addons: [createAncestors()]
});
const root = document.querySelector('main');
config.subscribe((response, action) => {
  ReactDOM.render((
    <Navigator
      response={response}
      action={action}
      config={config}
      render={renderFunction}
    />
  ), root);
});
