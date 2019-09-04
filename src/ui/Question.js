import React from "react";

const Question = ({ question }) => {
  return (
    <li className="question">
      <span className="question__question">{question.question}</span>
      <span
        className={`question__answer ${
          question ? "question__answer--show" : ""
        }`}
      >
        {question.answer}
      </span>
    </li>
  );
};

export default Question;
