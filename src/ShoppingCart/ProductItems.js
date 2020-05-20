import React from "react";
import List from "@material-ui/core/List";
import ProductItem from "./ProductItem";

import { Link } from "react-router-dom";

const ProductItems = props => {
  // console.log(props.fields[0].productPicture.fields.file.url.substring(2));
  const items = props.cartItems.map(item => (
    <ProductItem
      key={item.sys.id}
      productID={item.sys.id}
      productName={item.fields.productName}
      priceList={item.fields.productPrice}
      category={item.fields.productCategory.fields.title}
      image={item.fields.productPicture[0].fields.file.url}
    />
  ));

  return <List>{items}</List>;
};

export default ProductItems;
