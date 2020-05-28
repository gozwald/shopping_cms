const express = require("express");
require("dotenv").config();
const db = require("./database");
const app = express();
const cors = require("cors");
console.log("hey");

app.use(cors());

app.get("/category", (req, res) => {
  db.query("SELECT * FROM CATEGORY").then((e) => res.json(e.rows));
});

app.get("/products", (req, res) => {
  const query = req.query;
  const limit = query.num;

  query.num
    ? db
      .query(
        "SELECT product_id, product_description, product_name, category FROM product JOIN category ON product_category = category_id LIMIT $1",
        [limit]
      )
      .then((data) => res.json(data.rows))
      .catch(console.log)
    : db
      .query(
        "SELECT product_id, product_description, product_name, category FROM product JOIN category ON product_category = category_id"
      )
      .then((data) => res.json(data.rows))
      .catch(console.log);
});

app.get("/products/:category", (req, res) => {
  const { category } = req.params;
  db.query(
    "SELECT product_id, product_description, product_name, product_picture, category FROM product LEFT JOIN category ON (product.product_category = category.category_id) WHERE category.category iLike $1",
    [category]
  )
    .then((products) => res.json(products.rows))
    .catch((error) => console.log(error));
});

app.listen(5000, () => console.log("Server is running on port: 5000"));
