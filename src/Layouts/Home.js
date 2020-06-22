import React from "react";

import Header from "../Components/Header/Header";
import SuggestRecipesPage from "./SuggestRecipesPage";

import "./Home.css";

export default function HomeLayout({ children }) {
  return (
    <div className="Home">
      <Header />
      {children}
      <SuggestRecipesPage />
    </div>
  );
}
