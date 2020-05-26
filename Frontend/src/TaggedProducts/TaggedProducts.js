import React, { useEffect, useState } from "react";
import CartBar from "../ShoppingCart/CartBar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Client from "../Contentful";
import { CircularProgress } from "@material-ui/core";
import ProductCard from "../Products/ProductCard";
import { useParams } from "react-router";

const TaggedProducts = (props) => {
  const { tag } = useParams();

  const [products, setProducts] = useState([]);

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const getProductsByTag = () => {
    try {
      Client.getEntries({ content_type: "product" }).then((res) => {
        const tagged = res.items.filter(
          (item) => item.fields.productCategory.fields.title === capitalize(tag)
        );
        setProducts(tagged);
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductsByTag();
  }, []);

  const productCarts = products.map((item) => {
    return (
      <ProductCard
        key={item.sys.id}
        img={`http://${item.fields.productPicture[1].fields.file.url.substring(
          2
        )}`}
        // image={item.fields.productPicture[0].fields.file.url.substring(2)}
        productInfo={item.fields.productDescription.content[0].content[0].value}
        productName={item.fields.productName}
        pid={item.sys.id}
        tag={item.fields.productCategory.fields.title}
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
