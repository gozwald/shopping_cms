import React, { useEffect, useState } from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import PriceCard from "./PriceCard";
import Client from "../Contentful";
import ProductItem from "./ProductItem";
import ProductItems from "./ProductItems";
import CartBar from "./CartBar";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { Switch, Route, useParams } from "react-router-dom";
import ProductPage from "../ProductItem/ProductPage";

const useStyle = makeStyles(theme => ({
  listRoot: {
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(0)
  }
}));

const Layout = props => {
  const classes = useStyle();
  const [cartItems, setCartItems] = useState([]);
  const price = cartItems
    .map(item => item.fields.productPrice)
    .reduce((acc, price) => acc + price, 0);

  // const productNames = cartItems.map(item => item.fields.productName);
  // const priceList = cartItems.map(item => item.fields.productPrice);
  // const category = cartItems.map(
  //   item => item.fields.productCategory.fields.title
  // );
  // const images = cartItems.map(
  //   item => item.fields.productPicture[0].fields.file.url
  // );

  const getMyDefinedDataFromContentful = () => {
    try {
      Client.getEntries({ content_type: "product" }).then(res => {
        const cartItems = res.items.filter(
          item => Boolean(item.fields.isInShoppingCart) === true
        );
        setCartItems(cartItems);
      });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getMyDefinedDataFromContentful();
  }, []);

  return (
    <Switch>
      <Grid container border={1}>
        <Grid item xs={12}>
          <Box borderBottom={1}>
            <CartBar headerTitle={"Your Bag"} />
          </Box>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={9}>
            <List className={classes.listRoot} dense>
              <ProductItems cartItems={cartItems} />
            </List>
          </Grid>
          <Grid item xs={3}>
            <PriceCard price={price} />
          </Grid>
        </Grid>
        <Route exact />
        <Route exact path="/product/:id" component={ProductPage} />
      </Grid>
    </Switch>
  );
};

export default Layout;
