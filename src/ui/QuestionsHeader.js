import React, { useState } from "react";
import useWindowScroll from "@react-hook/window-scroll";

const QuestionsHeader = ({ items, questions }) => {
  const scrollY = useWindowScroll(60);
  return (
    <div className="questions__header">
      <span>
        {!items ? 0 : items.length}/{questions.length}
      </span>
      <button className="questions__header__clear">Clear</button>
    </div>
  );
};

export default QuestionsHeader;
