const express = require("express");
require("dotenv").config();
const db = require("./database");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  db.query("SELECT * FROM CATEGORY").then((e) => res.json(e.rows));
});

/*
* SELECT product_name FROM product LEFT JOIN category ON product.product_category = category.category_id
  WHERE category.category = 'Thinkers'
* */
app.get("/products/:category", (req, res) => {
  const { category } = req.params;
  db.query(
    "SELECT * FROM product LEFT JOIN category ON (product.product_category = category.category_id) WHERE category.category iLike $1",
    [category]
  )
    .then((products) => res.json(products.rows))
    .catch((error) => console.log(error));
});

app.listen(5000, () => console.log("Server is running on port: 5000"));
