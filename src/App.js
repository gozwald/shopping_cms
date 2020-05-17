import React, { useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import Layout from "./ShoppingCart/Layout";
import Client from "./Contentful";

const App = () => {
  useEffect(() => {
    const getMyDefinedDataFromContentful = () => {
      try {
        // content_type defines the data what you are looking for
        Client.getEntries({ content_type: "product" }).then(res =>
          console.log(res.items)
        );
      } catch (e) {
        console.log(e);
      }
    };
    getMyDefinedDataFromContentful();
  }, []);
  return (
    <CssBaseline>
      <Layout />
    </CssBaseline>
  );
};

export default App;
