import React, { useState } from "react";
import questions from "../questions/index";
import Question from "../ui/Question";

const Home = () => {
  const [items, setItems] = useState([]);

  const handleItems = questionId => {
    if (items && items.find(item => item == questionId)) {
      setItems(items.filter(item => item != questionId));
    } else {
      setItems([...items, questionId]);
    }
  };
  console.log(items);
  return (
    <main className="container">
      <div className="questions__header">
        <span>
          {!items ? 0 : items.length}/{questions.length}
        </span>
        <button className="questions__header__clear">Clear</button>
      </div>
      <ol>
        {questions.map(question => (
          <Question
            question={question}
            handleItems={handleItems}
            items={items}
          />
        ))}
      </ol>
    </main>
  );
};

export default Home;
