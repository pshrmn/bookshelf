import API from './api';
import PageMissing from './components/pages/PageMissing';

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
      every: () => API.books(),
      response: ({ error, resolved, set }) => {
        set.body(resolved.initial);
        set.title('Home');
        if (error) {
          set.error(error);
        } else {
          set.data(resolved.every);
        }
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
        set.title('Genres');
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
          every: ({ params }) => API.genre(params.genre),
          response: ({ route, error, resolved, set }) => {
            set.body(resolved.initial);
            set.title(route.params.genre);
            if (error) {
              set.error(error);
            } else {
              set.data(resolved.every);
            }
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
      every: () => API.authors(),
      response: ({ error, resolved, set }) => {
        set.body(resolved.initial);
        set.title('Authors');
        if (error) {
          set.error(error);
        } else {
          set.data(resolved.every);
        }
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
          every: ({ params }) => API.author(params.author),
          response: ({ route, error, resolved, set }) => {
            set.body(resolved.initial);
            set.title(route.params.author);
            if (error) {
              set.error(error);
            } else {
              set.data(resolved.every);
            }
          }
        }
      }
    ]
  },
  {
    name: 'Not Found',
    path: '(.*)',
    match: {
      initial: () => import(/* webpackChunkName: "NotFound" */ './components/pages/NotFound')
      .then(module => module.default)
      .catch(err => {
        console.error(err);
        return PageMissing;
      }),
      response: ({ resolved, set }) => {
        set.body(resolved.initial);
        set.title('Page Not Found');
      }
    }
  }
];
