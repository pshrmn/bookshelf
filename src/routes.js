import DataStore from './store';
import PageMissing from './components/pages/PageMissing';
import { genreMap } from 'constants/genres';

const RouteComponents = {};
function getRoute(name) {
  return RouteComponents[name] || PageMissing;
}

export default [
  {
    name: 'Home',
    path: '',
    preload: () => {
      return import(/* webpackChunkName: "Home" */ './components/pages/Index')
        .then(module => {
          RouteComponents['Index'] = module.default;
        })
        .catch(err => {
          console.error(err);
          return;
        });
    },
    load: (params, location, mods) => {
      return DataStore().then(store => {
        mods.setData({ books: store.books });
      });
    },
    body: () => getRoute('Index')
  },
  {
    name: 'Genres',
    path: 'genres',
    preload: () => {
      return import(/* webpackChunkName: "Genres" */ './components/pages/Genres')
        .then(module => {
          RouteComponents['Genres'] = module.default;
        })
        .catch(err => {
          console.error(err);
          return;
        });
    },
    body: () => getRoute('Genres'),
    children: [
      {
        name: 'Genre',
        path: ':genre',
        preload: () => {
          return import(/* webpackChunkName: "Genre" */ './components/pages/Genre')
            .then(module => {
              RouteComponents['Genre'] = module.default;
            })
            .catch(err => {
              console.error(err);
              return;
            });
        },
        load: (params, location, mods) => {
          return DataStore().then(store => {
            const { genre } = params;
            mods.setData({
              genre,
              description: genreMap[genre].description,
              books: store.genres[genre]
            });
          });
        },
        body: () => getRoute('Genre')
      },
    ]
  },
  {
    name: 'Authors',
    path: 'authors',
    preload: () => {
      return import(/* webpackChunkName: "Authors" */ './components/pages/Authors')
        .then(module => {
          RouteComponents['Authors'] = module.default;
        })
        .catch(err => {
          console.error(err);
          return;
        });
    },
    load: (params, location, mods) => {
      return DataStore().then(store => {
        mods.setData({
          authors: Object.keys(store.authors)
            .map(key => store.authors[key])
            .sort((a,b) => b.books.length - a.books.length)
        });
      });
    },
    body: () => getRoute('Authors'),
    children: [
      {
        name: 'Author',
        path: ':author',
        preload: () => {
          return import(/* webpackChunkName: "Author" */ './components/pages/Author')
            .then(module => {
              RouteComponents['Author'] = module.default;
            })
            .catch(err => {
              console.error(err);
              return;
            });
        },
        load: (params, location, mods) => {
          return DataStore().then(store => {
            const { author } = params;
            mods.setData({
              author,
              books: store.authors[author].books
            });
          });
        },  
        body: () => getRoute('Author')
      }
    ]
  }
];
