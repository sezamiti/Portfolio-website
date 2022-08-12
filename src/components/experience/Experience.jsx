import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const experience = () => {
  return (
    <section id="experience">
      <h5>Skills I have</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Development</h3>
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
                <h4>Node.js</h4>
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
            
          </div>
        </div>
        <div className="experience__backend">
          <h3>Soft skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className= 'experience__details-icon' />
              <div>
                <h4>Good communication</h4>
                
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className= 'experience__details-icon' />
              <div>
                <h4>Creativity </h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className= 'experience__details-icon' />
              <div>
                <h4>Communication Skills</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className= 'experience__details-icon' />
              <div>
                <h4>Teamwork</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className= 'experience__details-icon' />
              <div>
                <h4>Growth Mindset</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className= 'experience__details-icon' />
              <div>
                <h4>Problem-solving</h4>
              </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;