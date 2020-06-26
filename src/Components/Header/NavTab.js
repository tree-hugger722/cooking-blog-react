import React from "react";

import { Link } from "react-router-dom";

import "./Header.css";

const NavTab = ({ To, Name }) => {
  return (
    <Link className="nav-tab-text" to={To}>
      {Name}
    </Link>
  );
};

export default NavTab;
