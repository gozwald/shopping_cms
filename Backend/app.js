const express = require('express');
require("dotenv").config();
const db = require("./database");
const app = express();

db.query('SELECT NOW()', (err, res) => {
    console.log(err, res)

});



app.listen(5000, () => console.log("Server is running on port: 5000"));
