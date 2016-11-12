import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router';

import reducers from './reducers';
import bookLoader from './bookLoader';
import App from 'components/pages/App';

import 'sass/index.scss';

const init = initialState => {
  const reducer = combineReducers(Object.assign({}, reducers));
  const store = createStore(
    reducer,
    initialState
  );

  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
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
