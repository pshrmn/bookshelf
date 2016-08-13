import * as types from 'constants/ActionTypes';

export default function(state = [], action) {
  switch (action.type ) {
  case types.ADD_BOOK:
    return [action.book, ...state.slice()];
  default:
    return state;
  }
}
