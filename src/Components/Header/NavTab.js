import React from "react";

import { NavLink } from "react-router-dom";

import "./Header.css";

const NavTab = ({ name, to }) => {
  return (
    <NavLink
      className="nav-tab-text"
      exact
      activeClassName="selected-tab"
      to={to}
    >
      {name}
    </NavLink>
  );
};

export default NavTab;
