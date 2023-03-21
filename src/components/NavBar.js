import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <li>
        <Link to="/">Blogs</Link>
      </li>
      <li>
        <Link to="/createblog">Create Blogs</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </div>
  );
};

export default NavBar;
