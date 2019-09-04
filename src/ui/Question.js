import React, { useState } from "react";
import Collapsible from "./Collapsible";

const Question = ({ question }) => {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="question">
      <div className="question__number">{question.position}</div>
      <li className="question__card" onClick={() => setHidden(!hidden)}>
        <span className="question__question">{question.question}</span>
        <Collapsible initiallyCollapsed toggle={hidden}>
          <span className={`question__answer`}>{question.answer}</span>
        </Collapsible>
      </li>
    </div>
  );
};

export default Question;
