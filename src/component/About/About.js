import React from "react";
import photoUrl from "../../image/profile-pic.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <h2 className="section__heading">About Me</h2>
      <div className="about__container">
        <div className="about__content">
          <p>
            I’m a passionate web app developer. I always try to grab the new
            features of technology. I started my coding journey last year
            February and learned a lot of new technologies. I was dedicated to
            giving my full effort for completing my projects and I have
            completed them.
          </p>

          <a
            className="resume__btn"
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1IRO4fuT1kbk6kWfNiMkxFNZwThFlDnH1/view?usp=sharing"
          >
            Download Resume
          </a>
        </div>
        <img className="photoUrl" src={photoUrl} alt="" />
      </div>
    </div>
  );
};

export default About;
