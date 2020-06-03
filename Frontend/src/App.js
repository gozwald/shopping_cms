import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./StartingPage/Main";
import ProductPage from "./ProductItem/ProductPage";
import Layout from "./ShoppingCart/Layout";
import Signup from "./blog/signup";
import Login from "./blog/login";
import Dashboard from "./blog/dashboard";
import { Toolbar } from "@material-ui/core";
import Products from "./Products/Products";
import Logonav from "./StartingPage/logonav";
import Upperhero from "./StartingPage/upperhero";
import TaggedProducts from "./TaggedProducts/TaggedProducts";

const App = () => {
  return (
    <Router>
      <CssBaseline>
        <Logonav />
        <Switch>
          <Route exact path="/">
            <Upperhero />
            <Main />
          </Route>
          <Route exact path="/blog/dashboard" component={Dashboard} />
          <Route exact path="/blog/login" component={Login} />
          <Route exact path="/blog/signup" component={Signup} />
          <Route exact path="/card" component={Layout} />
          <Route exact path="/shop" component={Products} />
          <Route exact path="/shop/:id" component={ProductPage} />
          <Route exact path="/products/:category" component={TaggedProducts} />
        </Switch>
        <Grid
          style={{ backgroundColor: "rgb(55, 180, 0,0.32)" }}
          container
          xs={12}
          justify="center"
        >
          <Toolbar style={{ fontSize: "20px", fontFamily: "Roboto" }} />
        </Grid>
      </CssBaseline>
    </Router>
  );
};

export default App;
