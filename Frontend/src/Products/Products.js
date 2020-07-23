import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { CircularProgress } from "@material-ui/core";
import ProductCard from "./ProductCard";
import Fab from "@material-ui/core/Fab";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [num, setNum] = useState(1);
  const [buttonStatus, setButtonStatus] = useState(0);
  const loadingItems = 5;

  const getAllProducts = (num) => {
    fetch(`http://localhost:5000/products?num=${num * loadingItems}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        setProducts(res);
        res.length % loadingItems !== 0 && setButtonStatus(1);
      });
  };

  useEffect(() => {
    getAllProducts(num);
  }, [num]);

  const handleClick = () => {
    setNum((prev) => (prev += 1));
  };

  const productCarts = products.map((item) => {
    return (
      <ProductCard
        key={item.product_id}
        img={item.product_picture}
        productInfo={item.product_description}
        productName={item.product_name}
        pid={item.product_id}
        tag={item.category}
        price={item.product_price.toFixed(2)}
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
        <Grid container justify="space-evenly">
          {products ? productItems : <CircularProgress />}
        </Grid>
      </Box>
      <div style={{ textAlign: "center", margin: "1%" }}>
        <Fab variant="extended" onClick={handleClick} disabled={buttonStatus}>
          Show more
        </Fab>
      </div>
    </>
  );
};

export default Products;
