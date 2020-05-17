import React, { useEffect, useState } from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import PriceCard from "./PriceCard";
import Client from "../Contentful";

const Layout = props => {
  const [cartItems, setCartItems] = useState([]);
  const [productName, setProductName] = useState(null);
  const [pic, setPic] = useState(null);
  const [price, setPrice] = useState(null);
  const [category, setCategory] = useState(null);
  const [items, setItems] = useState([]);
  // asdf

  useEffect(() => {
    const getMyDefinedDataFromContentful = () => {
      try {
        // content_type defines the data what you are looking for
        Client.getEntries({ content_type: "product" }).then(res => {
          console.log(res);
          res.items
            .filter(item => Boolean(item.fields.isInShoppingCart) === true)
            .map(item => {
              setPic(
                item.fields.productPicture[0].fields.file.url.substring(2)
              );
              setPrice(item.fields.productPrice);
              setCategory(item.fields.productCategory.fields.title);
              setProductName(item.fields.productName);
            });
        });
      } catch (e) {
        console.log(e);
      }
    };
    getMyDefinedDataFromContentful();
  }, []);

  return (
    <Grid container border={1} spacing={1}>
      <Grid item xs={12}>
        <Box borderBottom={1}>
          <Typography variant={"h1"}>Shopping Cart</Typography>∑
        </Box>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={8}>
          <Box borderRight={1}>
            <Typography variant={"h1"}>Items List</Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <PriceCard price={price} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Layout;
