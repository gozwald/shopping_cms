import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import CartBar from "../ShoppingCart/CartBar";
import Box from "@material-ui/core/Box";

import { useParams } from "react-router-dom";
import Client from "../Contentful";

const ProductPage = props => {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getProduct = () => {
      try {
        Client.getEntries({ content_type: "product" })
          .then(res => res.items.filter(item => item.sys.id === id))
          .then(res => setProduct(res));
      } catch (e) {
        console.log(e);
      }
    };
    getProduct();
  }, [id]);

  console.log(id);

  return (
    <Box>
      <CartBar headerTitle={"Individual Product"} />
      <Typography>Hello Product with ID: {id}</Typography>
    </Box>
  );
};

export default ProductPage;
