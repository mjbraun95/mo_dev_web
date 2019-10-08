import React from 'react';

import { BrowserRouter as ReactRouter, Switch, Route } from 'react-router-dom';

import { ContactScreen, HomeScreen, PhotographyScreen, PortfolioScreen, Error404, LoginScreen, DashboardScreen } from './Screens'
import { Header, Footer } from './Components'

const Router = () => (
  <ReactRouter>
    <Switch>
      <Route path="/" exact component={withHeaderAndFooter(HomeScreen)} />
      <Route path="/contact" exact component={withHeaderAndFooter(ContactScreen)} />
      <Route path="/portfolio" exact component={withHeaderAndFooter(PortfolioScreen)} />
      <Route path="/photography" exact component={withHeaderAndFooter(PhotographyScreen)} />
      <Route path="/login" exact component={LoginScreen} />
      <Route path="/dashboard" exact component={DashboardScreen} />
      <Route component={Error404} />
    </Switch>
  </ReactRouter>
);

function withHeaderAndFooter(Screen) {
  return class ScreenWithHeaderAndFooter extends React.Component {
    render() {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "100vh"
          }}
        >
          <Header key="header" />
          <Screen key="screen" />
          <Footer key="footer" />
        </div>)
        ;
    };
  };
}

export default Router;
