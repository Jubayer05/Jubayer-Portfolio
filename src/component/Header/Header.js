import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header" id="home">
      <div className="overlay">
        <div className="header__content">
          <p>Hello I'm</p>
          <h1>Jubayer Ahmed</h1>
          <h5>A MERN stack developer</h5>
        </div>
      </div>
    </div>
  );
};

export default Header;
