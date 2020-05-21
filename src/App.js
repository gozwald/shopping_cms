import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./StartingPage/Main";
import ProductPage from "./ProductItem/ProductPage";
import Layout from "./ShoppingCart/Layout";
import Products from "./Products/Products";

const App = () => {
  return (
    <Router>
      <CssBaseline>
        <Switch>
          <Route exact path="/" component={props => <Main {...props} />} />
          <Route
            exact
            path="/card"
            component={props => <Layout {...props} />}
          />
          <Route
            exact
            path="/shop"
            component={props => <Products {...props} />}
          />
          <Route
            exact
            path="/shop/:id"
            component={props => <ProductPage {...props} />}
          />
        </Switch>
      </CssBaseline>
    </Router>
  );
};

export default App;
