import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from './routes';
import reducers from './reducers';
import bookLoader from './bookLoader';

import 'sass/index.scss';

const init = initialState => {
  const reducer = combineReducers(Object.assign({}, reducers));
  const store = createStore(
    reducer,
    initialState
  );

  ReactDOM.render(
    <Provider store={store}>
      <div>
        <Router history={hashHistory}
                routes={routes} />
      </div>
    </Provider>,
    document.querySelector('main')
  );
}

bookLoader('data/books.json')
  .then(resp => {
    if ( typeof resp === 'string' ) {
      resp = JSON.parse(resp);
    }

    init({
      books: resp.books
    });
  })
  .catch(err => {
    console.error(`Failed to load books: ${err}`);
  });
