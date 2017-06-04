import Index from './components/pages/Index';
import Genres from './components/pages/Genres';
import Genre from './components/pages/Genre';
import Authors from './components/pages/Authors';
import Author from './components/pages/Author';

export default [
  {
    name: 'Home',
    path: '',
    body: () => Index
  },
  {
    name: 'Genres',
    path: 'genres',
    body: () => Genres,
    children: [
      {
        name: 'Genre',
        path: ':genre',
        body: () => Genre
      },
    ]
  },
  {
    name: 'Authors',
    path: 'authors',
    body: () => Authors,
    children: [
      {
        name: 'Author',
        path: ':author',
        body: () => Author
      }
    ]
  }
];
