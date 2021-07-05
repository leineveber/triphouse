import React from 'react';
import { Switch, Route } from 'react-router';

import MainPage from '../pages/MainPage';
import SignUpPage from '../pages/SignUpPage';

const AppRouter = () => (
  <Switch>
    <Route exact path="/">
      <MainPage />
    </Route>
    <Route path="/signup">
      <SignUpPage />
    </Route>
  </Switch>
);

export default AppRouter;
