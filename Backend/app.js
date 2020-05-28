const express = require("express");
require("dotenv").config();
const db = require("./database");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  db.query("SELECT * FROM CATEGORY").then((e) => res.json(e.rows));
});

app.get("/products", (req, res) => {

  const query = req.query;
  const limit = query.num;


  query.num
    ? db
      .query("SELECT product_id, product_description, product_name, category FROM product JOIN category ON product_category = category_id LIMIT $1", [limit])
      .then(data => res.json(data.rows))
      .catch(console.log)
    : db
      .query("SELECT product_id, product_description, product_name, category FROM product JOIN category ON product_category = category_id")
      .then(data => res.json(data.rows))
      .catch(console.log);
});




app.listen(5000, () => console.log("Server is running on port: 5000"));
