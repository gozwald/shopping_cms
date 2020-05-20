import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./StartingPage/Main";
import ProductPage from "./ProductItem/ProductPage";
import Layout from "./ShoppingCart/Layout";

const App = () => {
  return (
    <Router>
      <CssBaseline>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/card" component={Layout} />
          <Route exact path="/product/:id" component={ProductPage} />
        </Switch>
      </CssBaseline>
    </Router>
  );
};

export default App;
