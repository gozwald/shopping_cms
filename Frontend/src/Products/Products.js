import React, { useEffect, useState } from "react";
import CartBar from "../ShoppingCart/CartBar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Client from "../Contentful";
import { CircularProgress } from "@material-ui/core";
import ProductCard from "./ProductCard";
import ProductItem from "../ShoppingCart/ProductItem";

const Products = (props) => {
  // const { match } = useRouteMatch();
  // const { productId } = useParams();

  const [products, setProducts] = useState([]);

  // const getProducts = () => {
  //   try {
  //     Client.getEntries({ content_type: "product" }).then((res) => {
  //       setProducts(res.items);
  //       // console.log(res.items[0].fields.productPicture[0].fields.file.url.substring(2))
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const getAllProducts = () => {
    fetch(`http://localhost:5000/products`, { method: "GET" })
      .then((response) => response.json())
      .then((res) => setProducts(res));
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  const productCarts = products.map((item) => {
    return (
      <ProductCard
        key={item.product_id}
        img={item.product_picture}
        productInfo={item.product_description}
        productName={item.product_name}
        pid={item.product_id}
        tag={item.product_category}
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
    </>
  );
};

export default Products;
