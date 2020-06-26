import React from "react";

import AboutUsPage from "./AboutUsPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import HomePage from "./HomePage";
import SuggestRecipesPage from "./SuggestRecipesPage";

import "./Home.css";

function HomeLayout({ children }) {
  return (
    <Router>
      <div className="home">
        <div className="content-above-footer">
          <Header />
          <br />
          {children}
          <Switch>
            <Route path="/about-us">
              <AboutUsPage />
            </Route>
            <Route path="/suggest-recipes">
              <SuggestRecipesPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
    // <HomePage />
    // <SuggestRecipesPage />
    // <AboutUsPage />
  );
}
export default HomeLayout;
