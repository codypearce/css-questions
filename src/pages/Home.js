import React, { useState } from "react";
import questions from "../questions/index";
import Question from "../ui/Question/Question";
import QuestionsHeader from "../ui/QuestionsHeader/QuestionsHeader";

const Home = () => {
  const [items, setItems] = useState([]);

  const handleItems = questionId => {
    if (items && items.find(item => item == questionId)) {
      setItems(items.filter(item => item != questionId));
    } else {
      setItems([...items, questionId]);
    }
  };

  const clearItems = () => {
    setItems([]);
  };

  return (
    <main className="container">
      <QuestionsHeader
        items={items}
        questions={questions}
        clearItems={clearItems}
      />
      <QuestionsHeader
        items={items}
        questions={questions}
        isFixed
        clearItems={clearItems}
      />
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
