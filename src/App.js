import React from 'react';
import Join from './Join';
import Main from './Main';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Link to="/">홈</Link>
      <Link to="/join">회원가입</Link>
      <Switch>
        <Route exact path="/"><Main /></Route>
        <Route path="/join"><Join /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;