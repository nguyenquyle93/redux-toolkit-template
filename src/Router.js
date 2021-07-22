import React from "react";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Address from './Components/Address/Address'
import Home from './Components/Home/Home'
import Category from './Components/Category/Category'
import Products from './Components/Products/Products'

export default function Router() {
  return (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/address">
            <Address />
          </Route>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
  )}