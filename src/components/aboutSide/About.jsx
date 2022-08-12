import React from "react";
import "./about.css";
import ME from "../../assets/avatar.jpg";
import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Serik</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Anant About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>Over 5 years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Tech Stack </h5>
              <small>MERN Stack</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ completed projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            obcaecati placeat ipsa quisquam tempore explicabo doloribus, atque,
            non et reprehenderit vero, minus mollitia consequuntur saepe illo ea
            magni aspernatur? Et.
          </p>
          <a href="#contact" className="btn third btn-primary about-btn">
            Talk To Serik
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;