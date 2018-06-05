import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HotelsSearch from './pages/hotels-search/HotelsSearch';
import PageNotFound from './pages/page-not-found/PageNotFound';

/**
 * @description Routes for the website.
 */
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HotelsSearch} />

        {/* These two rules must be the last routes */}
        <Route path="/404" component={PageNotFound} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default Routes;
