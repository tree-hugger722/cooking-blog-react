import React from "react";

import NavTab from "./NavTab";

import "./Header.css";

const NavBar = () => {
  return (
    <div>
      <nav id="nav-bar">
        <NavTab className="nav-tab" name="Home" />
        <NavTab className="nav-tab" name="Suggest Recipes" />
        <NavTab className="nav-tab" name="About Us" />
      </nav>
    </div>
  );
};

export default NavBar;
