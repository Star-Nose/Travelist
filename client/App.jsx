import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Login from './components/Login.jsx';

import MainContainer from './containers/MainContainer.jsx';

const App = () => (
  <div>
    <MainContainer />
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/main" component={MainContainer} />
      {/* <Route path="/signup" component={Signup} /> */}
    </Switch>
  </div>
);

export default App;
