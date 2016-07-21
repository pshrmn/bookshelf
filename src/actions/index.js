import * as types from "constants/ActionTypes";

export function addBook(book) {
  return {
    type: types.ADD_BOOK,
    book: book
  };
}
