const express = require("express");
const http = require("http");
const path = require("path");

const port = 8000;

const app = express();

app.use(express.static(path.join(__dirname, "public", "src")));

app.get("/", (req, res) => {
  console.log(`GET request for ${req.url}`);
  res.sendFile(path.join(__dirname, "public", "src", "index.html"));
});

app.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "src", "projects.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
