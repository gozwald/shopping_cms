const express = require("express");
require("dotenv").config();
const db = require("./database");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/blog/getall", (req, res) => {
  db.query(
    "SELECT author_name, author_avatar, author_description, post_date, post_type, post_title, post_content FROM authors JOIN posts ON author_id=post_author_id"
  )
    .then((e) => res.json(e.rows))
    .catch((error) => console.log(error));
});

app.post("/blog/post/:user", (req, res) => {
  const { user } = req.params;
  const { post_date, post_type, post_title, post_content } = req.body;

  db.query("SELECT author_id FROM authors WHERE author_username = $1", [user])
    .then((e) => {
      return db.query(
        "INSERT INTO posts (post_date, post_type, post_title, post_content, post_author_id) VALUES ($1, $2, $3, $4, $5) returning *",
        [post_date, post_type, post_title, post_content, e.rows[0].author_id]
      );
    })
    .then((e) => res.json(e.rows))
    .catch((error) => console.log(error));
});

app.get("/category", (req, res) => {
  db.query("SELECT * FROM CATEGORY")
    .then((e) => res.json(e.rows))
    .catch((error) => console.log(error));
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
