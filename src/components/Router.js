import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import App from '../App';
import SingleView from './SingleView';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} exact/>
      <Route path='/recipe/:id' component={SingleView} />
    </Switch>
  </BrowserRouter>
);

export default Router;