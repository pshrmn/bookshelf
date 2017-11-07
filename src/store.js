import bookLoader from './bookLoader';
import parseData from './parseData';

const dataPromise = bookLoader('data/books.json')
  .then(resp => {
    if ( typeof resp === 'string' ) {
      resp = JSON.parse(resp);
    }
    return Promise.resolve(parseData(resp.books));
  })
  .catch(err => {
    console.error(`Failed to load books: ${err}`);
  });

export default function DataStore() {
  return dataPromise;
}
