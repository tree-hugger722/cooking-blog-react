import React from "react";

const Header = () => {
  return (
    <div>
      <div class="color-strip" id="top"></div>
      <br />

      <div class="site-header">
        <h1 id="site-title">
          <a id="title" href="index.html">
            Taste of CLE
          </a>
        </h1>

        <nav id="nav-bar">
          <a id="home">Home</a>
          <a id="suggest-recipes-link">Suggest Recipes</a>
          <a id="about-link">About Us</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
