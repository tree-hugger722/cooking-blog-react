import React from "react";

import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import SuggestRecipesPage from "./SuggestRecipesPage";

import "./Home.css";

function HomeLayout({ children }) {
  return (
    <div className="home">
      <Header />
      <div className="content">{children}</div>
      {/* <SuggestRecipesPage /> */}
      <Footer />
    </div>
  );
}
export default HomeLayout;
