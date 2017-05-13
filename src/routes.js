import Index from './components/pages/Index';
import Genres from './components/pages/Genres';
import Genre from './components/pages/Genre';
import Authors from './components/pages/Authors';
import Author from './components/pages/Author';

export default [
  {
    name: 'Home',
    path: '',
    value: Index
  },
  {
    name: 'Genres',
    path: 'genres',
    value: Genres
  },
  {
    name: 'Genre',
    path: 'genre/:genre',
    value: Genre
  },
  {
    name: 'Authors',
    path: 'authors',
    value: Authors
  },
  {
    name: 'Author',
    path: 'author/:author',
    value: Author
  }
];
