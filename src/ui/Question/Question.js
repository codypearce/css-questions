import React, { useState } from "react";
import Collapsible from "../Collapsible";
import "./Question.css";

const Question = ({ question, handleItems, items }) => {
  const [hidden, setHidden] = useState(true);
  const isSelected = items && items.find(item => item == question.id);
  return (
    <div className={`question`}>
      <div className="question__number">{question.position}</div>
      <li
        className={`question__card ${isSelected && "question__card--checked"}`}
        onClick={() => setHidden(!hidden)}
      >
        <span className="question__question">{question.question}</span>

        <Collapsible initiallyCollapsed toggle={hidden}>
          <span className={`question__answer`}>{question.answer}</span>
        </Collapsible>
        <div
          className={`question__checkbox ${isSelected &&
            "question__checkbox--checked"}`}
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
            handleItems(question.id);
          }}
        ></div>
      </li>
    </div>
  );
};

export default Question;
