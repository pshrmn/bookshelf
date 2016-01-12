import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux"
import { Router, hashHistory } from "react-router";
import { Provider } from "react-redux";
import { syncHistory, routeReducer } from 'redux-simple-router'

import routes from "./routes";
import reducers from "./reducers";
import bookLoader from "./bookLoader";
import genres from "./constants/genres";

const init = initialState => {
  const reducer = combineReducers(Object.assign({}, reducers, {
    routing: routeReducer
  }));
  const store = applyMiddleware(
    syncHistory(hashHistory)
  )(createStore)(reducer, initialState)
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <Router history={hashHistory}
                routes={routes} />
      </div>
    </Provider>,
    document.querySelector("main")
  );
}

bookLoader("data/books.json")
  .then(resp => {
    init({
      books: resp.books,
      genres: genres
    });
  });
