import React from "react";

import ColorStrip from "./ColorStrip";
import NavBar from "./NavBar";
import Title from "./Title";

import "./Header.css";

const Header = () => {
  return (
    <div>
      <ColorStrip />
      <div className="site-header">
        <Title className="site-title" />
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
