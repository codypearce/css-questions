const express = require("express");
const app = express();
const questions = require("./data/questions");

app.get("/api/v1/all", (req, res) => {
  res.json(questions);
});

const port = 5000;
app.listen(port, () => console.log("listening on port ", 5000));
