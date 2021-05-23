import React from "react";
import "./../../index.css";

const Skills = () => {
  return (
    <section
      data-aos="fade-right"
      className="skills-container"
      name="skills"
      id="skills"
    >
      <h1 className="heading">What I Am Good At ?</h1>

      <div className="techs">
        <li>
          <i className="fab html fa-html5"></i> <p>HTML</p>
        </li>
        <li>
          <i className="fab css fa-css3"></i>
          <p>CSS</p>
        </li>
        <li>
          <i className="fab bootstrap fa-bootstrap"></i>
          <p>Bootstrap</p>
        </li>
        <li>
          <i className="fab javascript fa-js"></i>
          <p>Javascript</p>
        </li>
        <li>
          <i className="fab react fa-react"></i>
          <p>React</p>
        </li>
        <li>
          <i className="fab node fa-node"></i>
          <p>Node.js</p>
        </li>
        <li>
          <i className="fab python fa-python"></i>
          <p>Python</p>
        </li>
        <li>
          <i className="fas sql fa-database"></i>
          <p>SQL</p>
        </li>
      </div>
    </section>
  );
};

export default Skills;
