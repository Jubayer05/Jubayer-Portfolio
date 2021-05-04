/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavHashLink smooth to="#home">
        Home
      </NavHashLink>

      <NavHashLink smooth to="#about">
        About
      </NavHashLink>

      <NavHashLink smooth to="#skill">
        Skill
      </NavHashLink>
      <NavHashLink smooth to="#project">
        Project
      </NavHashLink>
      <NavHashLink smooth to="#contact">
        Contact
      </NavHashLink>
    </div>
  );
};

export default Navbar;
