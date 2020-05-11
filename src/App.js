/*
 * @Author: Supot Patsaithong
 * @Date: 2020-05-07 23:46:21
 * @Last Modified by: Supot Patsaithong
 * @Last Modified time: 2020-05-11 15:21:22
 */
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Product from "./pages/product";
import Login from "./pages/login";
import ERROR_404 from "./pages/404";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/product" component={Product} />
      <Route path="/login" component={Login} />
      <Route component={ERROR_404} />
    </Switch>
  );
};

export default Router;
