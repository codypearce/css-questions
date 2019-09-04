import React from "react";
import questions from "../questions/index";
import Question from "../ui/Question";

const Home = () => {
  return (
    <main className="container">
      <ol>
        {questions.map(question => (
          <Question question={question} />
        ))}
      </ol>
    </main>
  );
};

export default Home;
