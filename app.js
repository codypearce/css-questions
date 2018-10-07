const express = require("express");
const app = express();
const questions = require("./data/questions");
const getRandomInt = require("./src/utils/getRandomInt");

app.get("/api/v1/all", (req, res) => {
  res.json(questions);
});

app.get("/api/v1/random", (req, res) => {
  const numberOfQuestions = questions.length - 1;
  const randomNumber = getRandomInt(0, numberOfQuestions);
  res.json(questions[randomNumber]);
});

const port = 5000;
app.listen(port, () => console.log("listening on port ", 5000));
