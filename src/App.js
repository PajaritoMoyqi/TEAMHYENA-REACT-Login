import React from 'react';
import Join from './Join';
import Main from './Main';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Route exact path="/" component={Main} />
      <Route path="/join" component={Join} />
    </>
  );
}

export default App;