import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Header.css";

const NavTab = ({ shortcut, name }) => {
  return (
    <Link className="nav-tab-text" to={shortcut}>
      {name}
    </Link>
  );
};

export default NavTab;
