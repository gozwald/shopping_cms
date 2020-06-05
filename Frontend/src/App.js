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
import BlogPostLayout from "./blog/BlogPostLayout";
import BlogPost from "./blog/BlogPost";

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
      <CssBaseline>
        <Logonav numItems={shoppingCart.length} />
        <Switch>
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
          <Route
            exact
            path="/blog/getPostById/:blogId"
            component={BlogPostLayout}
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
              <ProductPage {...props} updateShoppingCart={updateShoppingCart} />
            )}
          />
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
