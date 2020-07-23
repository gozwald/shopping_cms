import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ProductItem from "./ProductItem";

import { Link } from "react-router-dom";

const ProductItems = ({ cartItems, updateShoppingCart }) => {
  const items = cartItems.map(({ count, properties }) => (
    <ProductItem
      key={properties.product_id}
      productID={properties.product_id}
      productName={properties.product_name}
      priceList={properties.product_price}
      count={count}
      total={count * properties.product_price}
      category={properties.product_category}
      image={properties.product_picture}
      updateShoppingCart={updateShoppingCart}
    />
  ));

  return <List>{items}</List>;
};

export default ProductItems;
