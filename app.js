const express = require("express");
const app = express();
const questions = require("./data/questions");
const getRandomInt = require("./src/utils/getRandomInt");

app.set("view engine", "pug");
app.use(express.static("client"));

app.get("/", function(req, res) {
  res.render("index", { questions });
});

app.get("/api/v1/all", (req, res) => {
  res.json(questions);
});

app.get("/api/v1/random", (req, res) => {
  const numberOfQuestions = questions.length - 1;
  const randomNumber = getRandomInt(0, numberOfQuestions);
  res.json(questions[randomNumber]);
});

app.get("/api/v1/:questionId", (req, res) => {
  res.json(questions[req.params.questionId]);
});

app.get("/api/v1/tags/:questionTags", (req, res) => {
  const tags = req.params.questionTags.split(",");
  let filteredQuestions;
  if (tags.length > 1) {
    filteredQuestions = questions.filter(question => {
      const filteredTags = question.tags.map(tag => {
        if (tags.includes(tag)) return true;
      });
      return filteredTags.length > 0;
    });
  } else {
    filteredQuestions = questions.filter(question =>
      question.tags.includes(tags[0])
    );
  }
  res.json(filteredQuestions);
});

const port = 3000;
app.listen(port, () => console.log("listening on port ", port));
module.exports = app;
