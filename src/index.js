import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createHashHistory } from 'tmp-history';
import createConfig from 'curi';
import { Navigator } from 'curi-react';

import routes from './routes';
import renderFunction from './renderFunction';
import reducers from './reducers';
import bookLoader from './bookLoader';

import 'sass/index.scss';

const history = createHashHistory();
const config = createConfig(history, routes);

const init = initialState => {
  const reducer = combineReducers(Object.assign({}, reducers));
  const store = createStore(
    reducer,
    initialState
  );

  config.ready().then(() => {
    ReactDOM.render((
      <Provider store={store}>
        <Navigator config={config}>
          {renderFunction}
        </Navigator>
      </Provider>
    ), document.querySelector('main'));
  });
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
