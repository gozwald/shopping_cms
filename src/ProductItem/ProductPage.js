import React from "react";
import { Typography } from "@material-ui/core";
import CartBar from "../ShoppingCart/CartBar";
import Box from "@material-ui/core/Box";

import { useParams } from "react-router-dom";

const ProductPage = props => {
  const { id } = useParams();
  console.log(id);
  return (
    <Box>
      <CartBar headerTitle={"Individual Product"} />
      <Typography>Hello Product</Typography>
    </Box>
  );
};

export default ProductPage;
