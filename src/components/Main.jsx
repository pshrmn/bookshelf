import React from 'react';
import { Match } from 'react-router';

import Index from './pages/Index';
import Genres from './pages/Genres';
import Genre from './pages/Genre';
import Authors from './pages/Authors';
import Author from './pages/Author';

export default () => (
  <div className="main">
    <Match pattern='/' exactly component={Index} />
    <Match pattern='/genres' component={Genres} />
    <Match pattern='/genre/:genre' component={Genre} />
    <Match pattern='/authors' component={Authors} />
    <Match pattern='/author/:author' component={Author} />
  </div>
);
