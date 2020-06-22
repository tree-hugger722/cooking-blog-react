import React from "react";

import RecipeForm, { COOKING_BLOG_TITLE } from "./Components/RecipeForm";
import HomeLayout from "./Layouts";

import "./App.css";

function App() {
  return (
    <HomeLayout>
      <h3>{COOKING_BLOG_TITLE}</h3>
    </HomeLayout>
  );
}

export default App;
