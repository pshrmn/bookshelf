import PageMissing from './components/pages/PageMissing';

const RouteComponents = {};
function getRoute(name) {
  return RouteComponents[name] || PageMissing;
}

function importAndSave(name) {
  
}

export default [
  {
    name: 'Home',
    path: '',
    preload: () => {
      return import('./components/pages/Index')
        .then(module => {
          RouteComponents['Index'] = module.default;
        })
        .catch(err => {
          console.err(err);
          return;
        });
    },
    body: () => getRoute('Index')
  },
  {
    name: 'Genres',
    path: 'genres',
    preload: () => {
      return import('./components/pages/Genres')
        .then(module => {
          RouteComponents['Genres'] = module.default;
        })
        .catch(err => {
          console.err(err);
          return;
        });
    },
    body: () => getRoute('Genres'),
    children: [
      {
        name: 'Genre',
        path: ':genre',
        preload: () => {
        return import('./components/pages/Genre')
          .then(module => {
            RouteComponents['Genre'] = module.default;
          })
          .catch(err => {
            console.err(err);
            return;
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
      return import('./components/pages/Authors')
        .then(module => {
          RouteComponents['Authors'] = module.default;
        })
        .catch(err => {
          console.err(err);
          return;
        });
    },
    body: () => getRoute('Authors'),
    children: [
      {
        name: 'Author',
        path: ':author',
        preload: () => {
          return import('./components/pages/Author')
            .then(module => {
              RouteComponents['Author'] = module.default;
            })
            .catch(err => {
              console.err(err);
              return;
            });
        },
        body: () => getRoute('Author')
      }
    ]
  }
];
