import React from 'react';

import { BrowserRouter as ReactRouter, Switch, Route } from 'react-router-dom';

import { AboutScreen, ContactScreen, HomeScreen, PhotographyScreen, PortfolioScreen, Error404 } from './Screens'
import { Header, Footer } from './Components'

const Router = () => (
  <ReactRouter>
    <Switch>
      <Route path="/" exact component={withHeaderAndFooter(HomeScreen)} />
      <Route path="/about" exact component={withHeaderAndFooter(AboutScreen)} />
      <Route path="/contact" exact component={withHeaderAndFooter(ContactScreen)} />
      <Route path="/portfolio" exact component={withHeaderAndFooter(PortfolioScreen)} />
      <Route path="/photography" exact component={withHeaderAndFooter(PhotographyScreen)} />
      <Route component={Error404} />
    </Switch>
  </ReactRouter>
);

function withHeaderAndFooter(Screen) {
  return class ScreenWithHeaderAndFooter extends React.Component {
    render() { return ([<Header id="header" />, <Screen id="screen" />, <Footer id="footer" />]) };
  };
}

export default Router;
