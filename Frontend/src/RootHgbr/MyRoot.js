import React from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "../ShoppingCart/Layout";

const MyRoot = () => {
  return (
    <Router>
      <CssBaseline>
        <Layout />
      </CssBaseline>
    </Router>
  );
};

export default MyRoot;
