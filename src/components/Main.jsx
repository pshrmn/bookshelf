import React from 'react';
import { Route } from 'react-router-dom';
import { ConfigSwitch as Switch } from 'rrc'

import Index from './pages/Index';
import Genres from './pages/Genres';
import Genre from './pages/Genre';
import Authors from './pages/Authors';
import Author from './pages/Author';

export default () => (
  <div className="main">
    <Switch
      routes={[
        { path: '/', exact: true, component: Index },
        { path: '/genres', component: Genres },
        { path: '/genre/:genre', component: Genre },
        { path: '/authors', component: Authors },
        { path: '/author/:author', component: Author }
      ]}
    />
  </div>
);
