import React from 'react';
import Join from './Join';
import Main from './Main';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Route path="/TEAMHYENA-REACT-Login/" component={Main} exact />
      <Route path="/TEAMHYENA-REACT-Login/join" component={Join} />
    </>
  );
}

export default App;