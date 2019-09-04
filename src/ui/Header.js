import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">CSS Questions</h1>
      <menu className="menu">
        <Link className="menu__link" to="/">
          Home
        </Link>
        <Link className="menu__link" to="/about">
          About
        </Link>
      </menu>
    </header>
  );
};

export default Header;
