import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeScreen, Error404Screen, PortfolioScreen } from './Screens';
import { NavBar, NavPanel, Footer } from './Components';
import styled from 'styled-components';

function Router() {
  return (
    <BrowserRouter>
      <RootContainer>
        <NavBar />
        <NavPanel />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/portfolio" exact component={PortfolioScreen} />
          <Route component={Error404Screen} />
        </Switch>
        <Footer />
      </RootContainer>
    </BrowserRouter>
  );
}

export default Router;


const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  width: 100vw;
  justify-content: space-between;
`