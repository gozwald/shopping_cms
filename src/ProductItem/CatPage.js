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

const CatPage = (props) => {
  const [product, setProduct] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    const getProduct = () => {
      try {
        Client.getEntries({ content_type: "product" })
          .then((res) =>
            res.items.filter(
              (item) => item.fields.productCategory.fields.title === title
            )
          )
          .then((res) => {
            setProduct(res);
          });
      } catch (e) {
        console.log(e);
      }
    };
    getProduct();
  }, []);

  return (
    <>
      <Box p={2}>
        <Grid container spacing={2} alignContent={"center"}>
          <Grid item xs={7}>
            <ProductPictures images={""} />
          </Grid>
          <Grid item xs={4}>
            <Box pl={2}>
              <Typography variant={"h3"}>{""}</Typography>
              <Box py={2}>
                <ProductRating rating={4} />
                <Typography variant={"h5"}>${""}</Typography>
              </Box>
              <Typography variant={"subtitle1"}>{""}</Typography>
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

export default CatPage;
