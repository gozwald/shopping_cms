import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./StartingPage/Main";
import ProductPage from "./ProductItem/ProductPage";
import Layout from "./ShoppingCart/Layout";
import { Toolbar } from "@material-ui/core";
import Products from "./Products/Products";
import Logonav from "./StartingPage/logonav"
import Upperhero from "./StartingPage/upperhero"


/*


// =======
//           <Route exact path="/" component={props => <Main {...props} />} />
//           <Route
//             exact
//             path="/card"
//             component={props => <Layout {...props} />}
//           />
//           <Route
//             exact
//             path="/shop"
//             component={props => <Products {...props} />}
//           />
//           <Route
//             exact
//             path="/shop/:id"
//             component={props => <ProductPage {...props} />}
//           />
// >>>>>>> master
* */

const App = () => {
  return (
    <Router>
      <CssBaseline>
      <Logonav/>
        <Switch>
          <Route exact path="/">
            <Upperhero/>
            <Main/>
          </Route>
          <Route exact path="/card" component={Layout} />
          <Route exact path="/shop" component={Products} />
          <Route exact path="/shop/:id" component={ProductPage} />
        </Switch>
        <Grid
            style={{ backgroundColor: "rgb(55, 180, 0,0.32)" }}
            container
            xs={12}
            justify="center"
          >
        <Toolbar style={{ fontSize: "20px", fontFamily: "Roboto" }}>

            </Toolbar>
        </Grid>
      </CssBaseline>
    </Router>
  );
};

export default App;
