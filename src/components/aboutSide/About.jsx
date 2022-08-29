import React from "react";
import "./about.css";
import ME from "../../assets/avatar.jpg";
import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { useTranslation } from "react-i18next";

const About = () => {

  const { t } = useTranslation();

  return (
    <section id="about">
      <h5>{t('Get to Know')}</h5>
      <h2>{t('About Serik')}</h2>

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
              <h5>{t('Experience')}</h5>
              <small>{t('Over 1 years')}</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Tech Stack </h5>
              <small>MERN Stack</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>{t('Projects')}</h5>
              <small>{('15+ completed projects')}</small>
            </article>
          </div>
          <p>
          {t('Hello again everyone! So, you already know that my name is Serik. A little about myself: student, 28 y.o., I live in Taraz, Kazakhstan. I like to develop, gain new knowledge. Able to learn independently. I like to get new experience, solve interesting problems. Personal traits: perseverance, high capacity for work, communication skills, enthusiasm, honesty, resistance to stress, ability to solve new problems, quick learning, conscientiousness. I can read technical literature both in Russian and in English.  I have an inquisitive mind and a desire to develop.')}
          </p>
          <a href="#contact" className="btn third btn-primary about-btn">
          {t('Talk To Me')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;