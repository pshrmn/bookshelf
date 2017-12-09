import bookLoader from 'bookLoader';
import parseData from 'parseData';
import { genreMap } from 'constants/genres';

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

export default {
  books: () => dataPromise.then(data => ({ books: data.books})),
  genre: (genre) => dataPromise.then(data => ({
    genre,
    description: genreMap[genre].description,
    books: data.genres[genre]
  })),
  authors: () => dataPromise.then(data => ({
    authors: Object.keys(data.authors)
      .map(key => data.authors[key])
      .sort((a,b) => b.books.length - a.books.length)
  })),
  author: (author) => dataPromise.then(data => ({
    author,
    books: data.authors[author].books
  }))
};
