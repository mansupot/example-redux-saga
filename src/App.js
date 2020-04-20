import React from "react";
import Product from "./pages/product";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import List from "./pages/list";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Product} />
        <Route path="/list" component={List} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
