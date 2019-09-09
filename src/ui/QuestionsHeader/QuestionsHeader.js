import React, { useState } from "react";
import useWindowScroll from "@react-hook/window-scroll";
import "./QuestionsHeader.css";
import HeaderButtons from "./HeaderButtons/HeaderButtons";

const QuestionsHeader = ({
  items,
  questions,
  isFixed,
  resetItems,
  toggleHideCompleted
}) => {
  const scrollY = useWindowScroll(60);
  const scrollPoint = scrollY > 238;
  const fixedClass = isFixed && "question__header__fixed";
  const showFixed = isFixed && scrollPoint && "question__header__fixed--show";
  const hideNoneFixed = !isFixed && scrollPoint && "question__header--hide";

  return (
    <div
      className={`questions__header ${fixedClass} ${showFixed} ${hideNoneFixed}`}
    >
      {isFixed ? <div className="questions__header__spacer"></div> : null}
      <div className="questions__header_text">
        {!items ? 0 : items.length}/{questions.length}
      </div>
      <HeaderButtons
        resetItems={resetItems}
        toggleHideCompleted={toggleHideCompleted}
      />
    </div>
  );
};

export default QuestionsHeader;
