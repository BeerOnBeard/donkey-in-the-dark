import React from 'react';
import ReactDom from 'react-dom';
import StartPage from './StartPage.js';
import GamePage from './GamePage.js';
import SuccessPage from './SuccessPage.js';
import routes from './routing/routes.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

ReactDom.render(
<Router>
  <Switch>
    <Route path={routes.success}>
      <SuccessPage />
    </Route>
    <Route path={routes.game}>
      <GamePage />
    </Route>
    <Route path={routes.start}>
      <StartPage />
    </Route>
  </Switch>
</Router>
, document.getElementById('root'));
