import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeScreen, Error404Screen } from './Screens';
import { NavBar, NavPanel } from './Components';

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <NavPanel />
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route component={Error404Screen} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
