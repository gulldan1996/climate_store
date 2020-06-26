import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import App from './App';
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <App />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}

export default Routes;
