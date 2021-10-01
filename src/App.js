import React from 'react';
import Join from './Join';
import Main from './Main';
import { Route, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={Main} />
      <Route path="/join" component={Join} />
    </BrowserRouter>
  );
}

export default App;