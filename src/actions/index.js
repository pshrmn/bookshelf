import * as types from "../constants/ActionTypes";

export function addBook(book, next) {
  return {
    type: types.ADD_BOOK,
    book: book,
    next: next
  };
}
