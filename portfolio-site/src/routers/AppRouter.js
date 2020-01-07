import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Homepage from '../components/Homepage';
import NotFoundPage from '../components/NotFoundPage';
import PortfolioItem from '../components/PortfolioItem';
import Portfolio from '../components/Portfolio';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Homepage} exact={true} />
        <Route path="/portfolio" component={Portfolio} exact={true} />
        <Route path="/portfolio/:id" component={PortfolioItem} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;