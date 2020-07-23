import React, { useEffect, useState } from "react";
import { Grid, Box } from "@material-ui/core";
import PriceCard from "./PriceCard";
import Client from "../Contentful";
import ProductItems from "./ProductItems";
import CartBar from "./CartBar";
import List from "@material-ui/core/List";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyle = makeStyles((theme) => ({
  listRoot: {
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(0),
  },
}));

const Layout = ({ updateShoppingCart, shoppingCart }) => {
  const classes = useStyle();
  const [cartItems, setCartItems] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    void (async function fetcher() {
      const itemsFetch = await fetch(`http://localhost:5000/products/`);
      const response = await itemsFetch.json();
      const items = {};
      let total = 0;

      shoppingCart.map((id) => {
        items[id] = items[id] || {};
        items[id].count = (items[id].count || 0) + 1;
        items[id].properties = response.filter(
          (entry) => entry.product_id === id
        )[0];
        total += items[id].properties.product_price;
      });

      setCartItems(Object.values(items));
      setPrice(total.toFixed(2));
    })();
  }, [shoppingCart]);

  return (
    <Grid container border={1}>
      <Grid container item xs={12}>
        <Grid item xs={9}>
          <List className={classes.listRoot} dense>
            <ProductItems
              cartItems={cartItems}
              updateShoppingCart={updateShoppingCart}
            />
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
