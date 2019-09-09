import React, { useState } from "react";
import questions from "../questions/index";
import Question from "../ui/Question/Question";
import QuestionsHeader from "../ui/QuestionsHeader/QuestionsHeader";
import createPersistedState from "use-persisted-state";
const useItemsState = createPersistedState("items");
const useHideState = createPersistedState("hideCompleted");

const Home = () => {
  const [items, setItems] = useItemsState([]);
  const [hideCompleted, setHideCompleted] = useHideState(false);

  const handleItems = questionId => {
    if (items && items.find(item => item == questionId)) {
      setItems(items.filter(item => item != questionId));
    } else {
      setItems([...items, questionId]);
    }
  };

  const resetItems = () => {
    setItems([]);
  };

  const toggleHideCompleted = () => {
    setHideCompleted(!hideCompleted);
  };

  return (
    <main className="container">
      <QuestionsHeader
        items={items}
        questions={questions}
        resetItems={resetItems}
        toggleHideCompleted={toggleHideCompleted}
        hideCompleted={hideCompleted}
      />
      <QuestionsHeader
        items={items}
        questions={questions}
        isFixed
        resetItems={resetItems}
        toggleHideCompleted={toggleHideCompleted}
        hideCompleted={hideCompleted}
      />
      <ol>
        {questions.map(question => (
          <Question
            key={question.id}
            question={question}
            handleItems={handleItems}
            items={items}
            hideCompleted={hideCompleted}
          />
        ))}
      </ol>
    </main>
  );
};

export default Home;
