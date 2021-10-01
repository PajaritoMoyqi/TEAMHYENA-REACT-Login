import React from 'react';
import Join from './Join';
import Main from './Main';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Route path="/" component={Main} exact />
      <Route path="/join" component={Join} />
    </>
  );
}

export default App;