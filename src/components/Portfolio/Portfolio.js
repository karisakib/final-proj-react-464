import React from "react";
import "./../../index.css";
import { motion } from "framer-motion";

const boxVariants = {
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
    },
  },
};

const Portfolio = () => {
  return (
    <section
      data-aos="fade-up"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
    >
      <h1 className="heading">Projects I have Built</h1>
      <div className="projects-container">
        {/* Project - Diaries Manager App */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/karisakib"
          >
            <div className="project-images" id="project1"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Data Pipeline</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/karisakib"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://github.com/karisakib"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Project - Shoe Store */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/karisakib"
          >
            <div className="project-images"  id="project2"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Data Analysis</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/karisakib"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://github.com/karisakib"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}
        {/* Project - Todo List */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/karisakib"
          >
            <div className="project-images" id="project3"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Data Dashboard</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/karisakib"
                >
                <i
                  className="fab fa-github"
                  title="github repo"
                  id="github"
                ></i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://github.com/karisakib"
                target="_blank"
              >
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}
     {/* // */}
      </div>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/karisakib"
        className="button-link"
      >
        <button className="button">More Projects</button>
      </a>
    </section>
  );
};

export default Portfolio;
