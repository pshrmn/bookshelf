import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from './pages/Index';
import Genres from './pages/Genres';
import Genre from './pages/Genre';
import Authors from './pages/Authors';
import Author from './pages/Author';

export default () => (
  <div className="main">
    <Switch>
      <Route path='/' exact component={Index} />
      <Route path='/genres' component={Genres} />
      <Route path='/genre/:genre' component={Genre} />
      <Route path='/authors' component={Authors} />
      <Route path='/author/:author' component={Author} />
    </Switch>
  </div>
);
