import React from "react";
import "./../../index.css";
import growthImage from "./../../images/growth.svg";
import webImage from "./../../images/web.svg";

const About = () => {
  return (
    <section
      data-aos="zoom-in"
      className="about-container"
      name="about"
      id="about"
    >
      <h1 className="heading">Little Bit About Me</h1>
      <div className="about-wrapper">
        <div className="about">
          <li>
            <img src={growthImage} alt="" />
            <p>
              Kari is a Data Scientist and a multi-disciplinary tech enthusiast
              aspiring to be a Machine Learning Engineer. His flexibility with
              modern day technologies allows him to build fine projects with
              great detail. He spends his time pursuing opprtunities of great
              advancements and projects to develop and sharpen his skillset.
            </p>
          </li>
        </div>
      </div>
    </section>
  );
};

export default About;
