const express = require("express");
const http = require("http");
const path = require("path");

const port = 8000;

const app = express();

app.use(express.static("/public"));

app.get("/", (req, res) => {
  console.log(`GET request for ${req.url}`);
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
