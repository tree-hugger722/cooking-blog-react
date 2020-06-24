import React from "react";

import AboutUsPage from "./AboutUsPage";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import SuggestRecipesPage from "./SuggestRecipesPage";

import "./Home.css";

function HomeLayout({ children }) {
  return (
    <div className="home">
      <div className="content-above-footer">
        <Header />
        {children}
        {/* <SuggestRecipesPage /> */}
        <AboutUsPage />
      </div>
      <Footer />
    </div>
  );
}
export default HomeLayout;
