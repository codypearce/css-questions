import React from "react";
import "./HeaderButtons.css";

const HeaderButtons = ({ resetItems, toggleHideCompleted }) => {
  return (
    <div className="HeaderButtons">
      <button className="HeaderButtons__button" onClick={resetItems}>
        Reset
      </button>
      <button
        className="HeaderButtons__button HeaderButtons__button--completed"
        onClick={toggleHideCompleted}
      >
        Hide Completed
      </button>
    </div>
  );
};

export default HeaderButtons;
