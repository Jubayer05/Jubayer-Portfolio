import React from "react";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </>
  );
};

export default Home;
