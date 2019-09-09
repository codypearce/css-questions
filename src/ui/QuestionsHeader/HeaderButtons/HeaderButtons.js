import React from "react";
import "./HeaderButtons.css";

const HeaderButtons = ({ resetItems }) => {
  return (
    <div className="HeaderButtons">
      <button className="questions__header__reset" onClick={resetItems}>
        Reset
      </button>
      <button
        className="questions__header__reset questions__header__hide"
        onClick={resetItems}
      >
        Hide Completed
      </button>
    </div>
  );
};

export default HeaderButtons;
