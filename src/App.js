import React from 'react';
import Join from './Join';
import Main from './Main';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/"><Main /></Route>
        <Route path="/join/"><Join /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;