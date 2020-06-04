const express = require("express");
require("dotenv").config();
const db = require("./database");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const verifyToken = (req, res, next) => {
  if (req.headers.token !== "undefined") {
    next();
  } else {
    res.sendStatus(403);
  }
};

app.get("/blog/dashboard", verifyToken, (req, res) => {
  jwt.verify(req.headers.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      db.query(
        "SELECT post_id, author_name, author_username, author_avatar, author_description, post_date, post_type, post_title, post_content FROM authors JOIN posts ON author_id=post_author_id WHERE author_username = $1",
        [authData]
      ).then((e) => res.json(e.rows));
    }
  });
});

app.get("/blog/getall", (req, res) => {
  db.query(
    "SELECT post_id, author_name, author_avatar, author_description, post_date, post_type, post_title, post_content FROM authors JOIN posts ON author_id=post_author_id"
  )
    .then((e) => res.json(e.rows))
    .catch((error) => console.log(error));
});

app.post("/blog/login", (req, res) => {
  const { author_username, author_password } = req.body;

  db.query("SELECT author_password FROM authors WHERE author_username = $1", [
    author_username,
  ])
    .then((e) => {
      if (e.rows[0].author_password === author_password) {
        jwt.sign(author_username, "secretkey", (err, token) => {
          res.status(200).json(token);
        });
      } else {
        res.sendStatus(403);
      }
    })
    .catch((error) => console.log(error));
});

app.post("/blog/addauthor", (req, res) => {
  const {
    author_username,
    author_password,
    author_name,
    author_avatar,
    author_description,
  } = req.body;
  db.query(
    "INSERT INTO authors (author_username, author_password, author_name, author_avatar, author_description) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [
      author_username,
      author_password,
      author_name,
      author_avatar,
      author_description,
    ]
  )
    .then((e) => res.json(e.rows))
    .catch((error) => console.log(error));
});

app.post("/blog/post/", (req, res) => {
  const {
    author_username,
    post_date,
    post_type,
    post_title,
    post_content,
  } = req.body;

  db.query("SELECT author_id FROM authors WHERE author_username = $1", [
    author_username,
  ])
    .then((e) => {
      return db.query(
        "INSERT INTO posts (post_date, post_type, post_title, post_content, post_author_id) VALUES ($1, $2, $3, $4, $5) returning *",
        [post_date, post_type, post_title, post_content, e.rows[0].author_id]
      );
    })
    .then((e) => res.json(e.rows))
    .catch((error) => console.log(error));
});

app.put("/blog/update/", (req, res) => {
  const { post_id, post_date, post_type, post_title, post_content } = req.body;

  db.query(
    "UPDATE posts SET post_date = $1, post_type = $2, post_title = $3, post_content = $4 WHERE post_id = $5 returning *",
    [post_date, post_type, post_title, post_content, post_id]
  )
    .then((e) => res.json(e.rows))
    .catch((error) => console.log(error));
});

app.delete("/blog/delete/", (req, res) => {
  const { post_id } = req.body;

  db.query("DELETE FROM posts WHERE post_id = $1 returning *", [post_id])
    .then((e) => res.json(e.rows))
    .catch((error) => console.log(error));
});

app.get("/products", (req, res) => {
  const query = req.query;
  const limit = query.num;

  query.num
    ? db
        .query(
          "SELECT product_id, product_description, product_name,product_picture, product_price, category FROM product JOIN category ON product_category = category_id LIMIT $1",
          [limit]
        )
        .then((data) => res.json(data.rows))
        .catch(console.log)
    : db
        .query(
          "SELECT product_id, product_description, product_name, product_picture,product_price, category FROM product JOIN category ON product_category = category_id"
        )
        .then((data) => res.json(data.rows))
        .catch(console.log);
});

app.get("/category", (req, res) => {
  db.query("SELECT * FROM category")
    .then((e) => res.json(e.rows))
    .catch((error) => console.log(error));
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

app.get("/product/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * From product WHERE product_id = $1", [id])
    .then((product) => res.json(product.rows[0]))
    .catch((e) => console.log(e));
});

app.listen(5000, () => console.log("Server is running on port: 5000"));
