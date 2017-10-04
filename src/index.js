import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Hash from '@hickory/hash';
import createConfig from '@curi/core';
import { Navigator } from '@curi/react';
import createAncestors from '@curi/addon-ancestors';

import routes from './routes';
import renderFunction from './renderFunction';
import reducers from './reducers';
import bookLoader from './bookLoader';
import parseData from './parseData';

import 'sass/index.scss';

const history = Hash();
const config = createConfig(history, routes, {
  addons: [createAncestors]
});

const init = values => {
  const [ initialState ] = values;
  const reducer = combineReducers(Object.assign({}, reducers));
  const store = createStore(
    reducer,
    initialState
  );

  ReactDOM.render((
    <Provider store={store}>
      <Navigator config={config} render={renderFunction} />
    </Provider>
  ), document.querySelector('main'));
}

const booksPromise = bookLoader('data/books.json')
  .then(resp => {
    if ( typeof resp === 'string' ) {
      resp = JSON.parse(resp);
    }
    return Promise.resolve(parseData(resp.books));
  })
  .catch(err => {
    console.error(`Failed to load books: ${err}`);
  });

Promise.all([ booksPromise, config.ready() ]).then(init);
