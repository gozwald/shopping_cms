const express = require("express");
require("dotenv").config();
const db = require("./database");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  db.query("SELECT * FROM CATEGORY").then((e) => res.json(e.rows));
});

app.listen(5000, () => console.log("Server is running on port: 5000"));
