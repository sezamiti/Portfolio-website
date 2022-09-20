import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/porfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets//portfolio5.png";
import IMG6 from '../../assets/portfolio6.png'
import { useTranslation } from "react-i18next";


const data =[
  {
    id:1,
    image: IMG1,
    title: 'Movies search',
    github: 'https://github.com/sezamiti/movies-project-with-api',
    demo: 'https://sezamiti.github.io/movies-project-with-api/',
    description: `React hook, CRA, JSX`
  },
  {
    id:2,
    image: IMG2,
    title: 'Employees',
    github: 'https://github.com/sezamiti/employees',
    demo: 'https://employees-nu.vercel.app/',
    description: 'javaScript ES6'
  },
  {
    id:3,
    image: IMG3,
    title: 'Blog-Q-A(todo list)',
    github: 'https://github.com/sezamiti/Blog-Q-A',
    demo: 'https://my-project-1-943c9.web.app/',
    description: 'js, local Storage + Firebase '
  },
  {
    id:4,
    image: IMG4,
    title: 'ShowCase',
    github: 'https://github.com/sezamiti/ShowCase',
    demo: 'https://sezamiti.github.io/ShowCase/',
    description: 'React,  CRUD API + basket'
  },
  {
    id:5,
    image: IMG5,
    title: 'Marvel information portal',
    github: 'https://github.com/sezamiti/Api-training-marvel-',
    demo: 'https://marvel-taupe-chi.vercel.app/',
    description: 'React...'
  },
  {
    id:6,
    image: IMG6,
    title: 'Site copy "TMDB"',
    github: 'https://github.com/sezamiti/Copy-of-themoviedb',
    demo: 'https://themoviedb-mocha.vercel.app/',
    description: 'React + Tilwind + axios + fontawesome'
  },

  
  

]
  


const Portfolio = () => {

  const { t } = useTranslation();

  return (
    <section id="portfolio">
      <h5>{t("Serik's Recent Work")}</h5>
      <h2>{t("Portfolio")}</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, demo, description}) => {
          return (
            <article key = {id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <h3 className="descr">{description}</h3>
          <div className="portfolio__item-cta">
            <a
              href={github}
              className="btn third about-btn"
              target="_blank" rel="noreferrer"
            >
              Github
            </a>
            <a
              href={demo}
              className="btn third about-btn"
              target="_blank" rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
          )
        })
        }
      </div>
    </section>
  );
};

export default Portfolio;