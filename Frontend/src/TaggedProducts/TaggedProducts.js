import React, { useEffect, useState } from "react";
import CartBar from "../ShoppingCart/CartBar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Client from "../Contentful";
import { CircularProgress } from "@material-ui/core";
import ProductCard from "../Products/ProductCard";
import { useParams } from "react-router";

const TaggedProducts = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsByTag = () => {
      try {
        fetch(`http://localhost:5000/products/${category}`, { method: "GET" })
          .then((response) => response.json())
          .then((res) => setProducts(res));
      } catch (e) {
        console.log(e);
      }
    };
    getProductsByTag();
  }, [category]);

  const productCarts = products.map((item) => {
    return (
      <ProductCard
        key={item.product_id}
        img={item.product_picture}
        productInfo={item.product_description}
        productName={item.product_name}
        pid={item.product_id}
        tag={item.category}
      />
    );
  });

  const productItems = (
    <Grid container spacing={2}>
      {productCarts}
    </Grid>
  );
  return (
    <>
      <Box pt={3} px={6}>
        {products ? productItems : <CircularProgress />}
      </Box>
    </>
  );
};

export default TaggedProducts;
