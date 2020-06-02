import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

import { useParams } from "react-router-dom";
import Client from "../Contentful";
import Grid from "@material-ui/core/Grid";
import ProductPictures from "./ProductPictures";
import ProductRating from "./ProductRating";
import ProductCard from "../Products/ProductCard";
import Button from "@material-ui/core/Button";

const ProductPage = () => {
  const [product, setProduct] = useState([undefined]);

  let { id } = useParams();
  // id = 6;

  useEffect(() => {
    const getProductById = () => {
      fetch(`http://localhost:5000/product/${id}`, { method: "GET" })
        .then((response) => response.json())
        .then((res) => setProduct(res));
    };
    getProductById();
  }, [id]);
  return (
    <>
      <Box p={2}>
        <Grid container spacing={2} alignContent={"center"}>
          <Grid item xs={7}>
            <ProductPictures picture={product.product_picture} />
          </Grid>
          <Grid item xs={4}>
            <Box pl={2}>
              <Typography variant={"h3"}>{product.product_name}</Typography>
              <Box py={2}>
                <ProductRating rating={4} />
                <Typography variant={"h5"}>${product.product_price}</Typography>
              </Box>
              <Typography variant={"subtitle1"}>
                {product.product_description}
              </Typography>
              <Box pt={3}>
                <Button variant={"contained"} color={"secondary"}>
                  Buy
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductPage;
