import React, { useEffect, useState } from "react";
import { Grid, Box } from "@material-ui/core";
import PriceCard from "./PriceCard";
import Client from "../Contentful";
import ProductItems from "./ProductItems";
import CartBar from "./CartBar";
import List from "@material-ui/core/List";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyle = makeStyles(theme => ({
  listRoot: {
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(0)
  }
}));

const Layout = () => {
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
    <Grid container border={1}>
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
    </Grid>
  );
};

export default Layout;
