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
