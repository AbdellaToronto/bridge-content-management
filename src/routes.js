import React from 'react';
import { Route, Switch } from 'react-router';



export default (
  <Switch>
    <Route exact path="/" component={() => <h1>Hello world</h1>}/>
  </Switch>
);