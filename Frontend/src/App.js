import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./StartingPage/Main";
import ProductPage from "./ProductItem/ProductPage";
import Layout from "./ShoppingCart/Layout";
import Signup from "./blog/signup";
import Login from "./blog/login";
import Dashboard from "./blog/dashboard";
import Box from "@material-ui/core/Box";
import { Toolbar } from "@material-ui/core";
import Products from "./Products/Products";
import Logonav from "./StartingPage/logonav";
import Upperhero from "./StartingPage/upperhero";
import TaggedProducts from "./TaggedProducts/TaggedProducts";
import BlogEditor from "./blog/BlogEditor";
import BlogEditLayout from "./blog/BlogEditLayout";
import CreateBlog from "./blog/CreateBlog";
import BlogCreateLayout from "./blog/BlogCreateLayout";
import Blog from "./blog/frontend/Blog";
import Cookies from "js-cookie";

const App = () => {
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blog/getall", {
      method: "GET",
      headers: { token: Cookies.get("token") },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  const updateShoppingCart = (data, action) => {
    if (action === "+") setShoppingCart([...shoppingCart, data]);
    else {
      setShoppingCart((prev) => {
        if (prev.length > 1) {
          const index = prev.indexOf(data);
          const array = prev.slice();
          array.splice(index, 1);
          return array;
        }
        return [];
      });
    }
  };

  return (
    <Router>
      <Box
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Logonav numItems={shoppingCart.length} />
        <Switch>
          <Box
            style={{
              height: "300vh",
            }}
          >
            <Route exact path="/">
              <Upperhero />
              <Main />
            </Route>
            <Route
              exact
              path="/card"
              render={(props) => (
                <Layout
                  {...props}
                  updateShoppingCart={updateShoppingCart}
                  shoppingCart={shoppingCart}
                />
              )}
            />
            <Route exact path="/blog/dashboard" component={Dashboard} />
            <Route exact path="/blog/update" component={BlogEditLayout} />
            <Route exact path="/blog/create" component={BlogCreateLayout} />
            <Route exact path="/blog/login" component={Login} />
            <Route exact path="/blog/signup" component={Signup} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/shop" component={Products} />
            <Route
              exact
              path="/shop/:id"
              render={(props) => (
                <ProductPage
                  {...props}
                  updateShoppingCart={updateShoppingCart}
                />
              )}
            />
            <Route
              exact
              path="/products/:category"
              component={TaggedProducts}
            />
          </Box>
        </Switch>
        <Box
          style={{ height: "70px", backgroundColor: "rgb(55, 180, 0,0.32)" }}
          justify="center"
        >
          <Toolbar style={{ fontSize: "20px", fontFamily: "Roboto" }} />
        </Box>
      </Box>
    </Router>
  );
};

export default App;
