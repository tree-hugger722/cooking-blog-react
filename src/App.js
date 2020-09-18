import React from "react";

import AboutUsPage from "./Layouts/AboutUsPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HomePage from "./Layouts/HomePage";
import SuggestRecipesPage from "./Layouts/SuggestRecipesPage";

import "typeface-fredericka-the-great";
import "typeface-nunito";
import "./App.css";

const App = () => (
  <Router>
    <div className="home">
      <div className="content-above-footer">
        <Header />
        <br />
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
);
export default App;
