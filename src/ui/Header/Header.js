import React from "react";
import { Link } from "react-router-dom";
import Github from "../Github/Github";
import "./Header.css";

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
      <Github className="Header__github" />
    </header>
  );
};

export default Header;
