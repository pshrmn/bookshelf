export default function(data) {
  const books = [];
  const authors = {};
  const genres = {};

  data.forEach(book => {
    books.push(book);
    
    if (!authors[book.author]) {
      authors[book.author] = {
        name: book.author,
        books: [],
        genre: 'UNKNOWN'
      };
    }
    authors[book.author].books.push(book);

    if (!genres[book.genre]) {
      genres[book.genre] = [];
    }
    genres[book.genre].push(book);
  });

  // decorate the author based on the genre of one of their books
  // this might change each render if an author has written multiple genres
  Object.keys(authors).forEach(author => {
    const randomIndex = Math.floor(Math.random() * authors[author].books.length);
    authors[author].genre = authors[author].books[randomIndex].genre;
  });

  return {
    books,
    authors,
    genres
  }
}