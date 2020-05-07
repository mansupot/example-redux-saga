/*
 * @Author: Supot Patsaithong
 * @Date: 2020-05-07 23:46:21
 * @Last Modified by:   Supot Patsaithong
 * @Last Modified time: 2020-05-07 23:46:21
 */
import React from "react";
import { Route, Switch } from "react-router-dom";

import Product from "./pages/product";
import Login from "./pages/login";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/product" component={Product} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default Router;
