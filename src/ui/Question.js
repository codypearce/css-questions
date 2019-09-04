import React from "react";

const Question = ({ question }) => {
  return (
    <div className="question">
      <div className="question__number">{question.position}</div>
      <li className="question__card">
        <span className="question__question">{question.question}</span>
        <span
          className={`question__answer ${
            question ? "question__answer--show" : ""
          }`}
        >
          {question.answer}
        </span>
      </li>
    </div>
  );
};

export default Question;
