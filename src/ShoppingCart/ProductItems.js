import React from "react";
import List from "@material-ui/core/List";
import ProductItem from "./ProductItem";

const ProductItems = props => {
  props.shoppingCartItems.map(item => {
    <ProductItem category={item.category} />;
  });
  return <List></List>;
};
