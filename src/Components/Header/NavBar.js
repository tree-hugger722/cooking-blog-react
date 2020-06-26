import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutUsPage from "../../Layouts/AboutUsPage";
import Home from "../../Layouts/Home";
import HomePage from "../../Layouts/HomePage";
import NavTab from "./NavTab";
import SuggestRecipesPage from "../../Layouts/SuggestRecipesPage";

import "./Header.css";
import AboutUs from "../AboutUs/AboutUs";

const NavBar = () => {
  return (
    <div>
      <nav id="nav-bar">
        <NavTab className="nav-tab" shortcut="" name="Home" />
        <NavTab
          className="nav-tab"
          shortcut="/suggest-recipes"
          name="Suggest Recipes"
        />
        <NavTab className="nav-tab" shortcut="/about-us" name="About Us" />
      </nav>
    </div>
  );
};

export default NavBar;
