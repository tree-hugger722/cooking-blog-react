import React from "react";

import "./Header.css";

const NavTab = (props) => {
  return (
    <div className="nav-tab-text">
      <p>{props.name}</p>
    </div>
  );
};

export default NavTab;
