import * as types from "../constants/ActionTypes";
import { push } from "react-router-redux";

/*
 * after adding a book, redirect
 */
export default store => nextDispatch => action => {
  if ( action.type !== types.ADD_BOOK ) {
    return nextDispatch(action);
  }
  nextDispatch(action);
  return store.dispatch(push(action.next || "/"));
}
