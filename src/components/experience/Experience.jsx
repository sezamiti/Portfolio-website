import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";



const Experience = () => {

  const { t } = useTranslation();
  
  return (
    <section id="experience">
      <h5>{t('Skills I have')}</h5>
      <h2>{t('')}</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>{t('Development')}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className= 'experience__details-icon'  />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className= 'experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className= 'experience__details-icon' />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className= 'experience__details-icon' />
              <div>
                <h4>React.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className= 'experience__details-icon' />
              <div>
                <h4>BootStrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className= 'experience__details-icon' />
              <div>
                <h4>Laravel</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className= 'experience__details-icon' />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className= 'experience__details-icon' />
              <div>
                <h4>Git/Github</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className= 'experience__details-icon' />
              <div>
                <h4>Docker</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            
          </div>
        </div>
        <div className="experience__backend">
          <h3>Soft skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className= 'experience__details-icon' />
              <div>
                <h4>{t('Good communication')}</h4>
                
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className= 'experience__details-icon' />
              <div>
                <h4>{t('Creativity')} </h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className= 'experience__details-icon' />
              <div>
                <h4>{t('Teamwork skills')}</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className= 'experience__details-icon' />
              <div>
                <h4>{t('Adaptability')}</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className= 'experience__details-icon' />
              <div>
                <h4>{t('Growth Mindset')}</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className= 'experience__details-icon' />
              <div>
                <h4>{t('Problem-solving')}</h4>
              </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;