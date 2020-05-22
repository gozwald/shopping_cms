import React, { useEffect, useState } from "react";
import CartBar from "../ShoppingCart/CartBar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Client from "../Contentful";
import { CircularProgress } from "@material-ui/core";
import ProductCard from "../Products/ProductCard";

const TaggedProducts = props => {
  // const { match } = useRouteMatch();
  // const {tag} = useParams();
  const tag = "lovers";

  const [products, setProducts] = useState([]);
  // console.log(products);i

  // .then(res => res.items.filter(item => item.fields.productCategory.fields.title === title))

  //
  // const getProducts = () => {
  //   try {
  //     Client.getEntries({ content_type: "product" }).then(res => {
  //       setProducts(res.items);
  //       // console.log(res.items[0].fields.productPicture[0].fields.file.url.substring(2))
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const getProductsByTag = () => {
    try {
      Client.getEntries({ content_type: "product" }).then(res => {
        const tagged = res.items.filter(
          item => item.fields.productCategory.fields.title === "Lovers"
        );
        setProducts(tagged);
      });
      // console.log(res.items[0].fields.productPicture[0].fields.file.url.substring(2))
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductsByTag();
  }, []);

  const productCarts = products.map(item => {
    // console.log(item.fields.productPicture[0].fields.file.url.substring(2));
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
