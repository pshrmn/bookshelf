import DataStore from './store';
import PageMissing from './components/pages/PageMissing';
import { genreMap } from 'constants/genres';

export default [
  {
    name: 'Home',
    path: '',
    match: {
      initial: () => import(/* webpackChunkName: "Home" */ './components/pages/Index')
        .then(module => module.default)
        .catch(err => {
          console.error(err);
          return PageMissing;
        }),
      every: () => DataStore(),
      response: ({ resolved, set }) => {
        set.body(resolved.initial);
        set.data({ books: resolved.every.books });
      }
    }
  },
  {
    name: 'Genres',
    path: 'genres',
    match: {
      initial: () => import(/* webpackChunkName: "Genres" */ './components/pages/Genres')
        .then(module => module.default)
        .catch(err => {
          console.error(err);
          return PageMissing;
        }),
      response: ({ resolved, set }) => {
        set.body(resolved.initial);
      }
    },
    children: [
      {
        name: 'Genre',
        path: ':genre',
        match: {
          initial: () => import(/* webpackChunkName: "Genre" */ './components/pages/Genre')
            .then(module => module.default)
            .catch(err => {
              console.error(err);
              return PageMissing;
            }),
          every: () => DataStore(),
          response: ({ resolved, route, set }) => {
            set.body(resolved.initial);
            const { genre } = route.params;
            set.data({
              genre,
              description: genreMap[genre].description,
              books: resolved.every.genres[genre]
            });
          }
        }
      },
    ]
  },
  {
    name: 'Authors',
    path: 'authors',
    match: {
      initial: () => import(/* webpackChunkName: "Authors" */ './components/pages/Authors')
        .then(module => module.default)
        .catch(err => {
          console.error(err);
          return PageMissing;
        }),
      every: () => DataStore(),
      response: ({ resolved, set }) => {
        set.body(resolved.initial);
        const store = resolved.every;
        set.data({
          authors: Object.keys(store.authors)
            .map(key => store.authors[key])
            .sort((a,b) => b.books.length - a.books.length)
        });
      }
    },
    children: [
      {
        name: 'Author',
        path: ':author',
        match: {
          initial: () => import(/* webpackChunkName: "Author" */ './components/pages/Author')
            .then(module => module.default)
            .catch(err => {
              console.error(err);
              return PageMissing;
            }),
          every: () => DataStore(),
          response: ({ resolved, route, set }) => {
            set.body(resolved.initial);
            const { author } = route.params;
            set.data({
              author,
              books: resolved.every.authors[author].books
            });
          }
        }
      }
    ]
  }
];
