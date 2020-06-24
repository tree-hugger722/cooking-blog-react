import React from "react";

import AboutUsPage from "./AboutUsPage";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import HomePage from "./HomePage";
import SuggestRecipesPage from "./SuggestRecipesPage";

import "./Home.css";

function HomeLayout({ children }) {
  return (
    <div className="home">
      <div className="content-above-footer">
        <Header />
        {children}
        <HomePage />
        {/* <SuggestRecipesPage /> */}
        {/* <AboutUsPage /> */}
      </div>
      <Footer />
    </div>
  );
}
export default HomeLayout;
