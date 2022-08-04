import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t6tvbvd', 'template_oihbcbs', form.current, '6Azocf9FXQUQT-m71')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dossumbekov@list.ru</h5>
            <a href="mailto:dossumbekov@list.ru" target="_blank">
            Drop a Mail
            </a>
          </article>
          <article className="contact__option">
            <FaTelegramPlane classmae= 'contact__option-icon' />
            <h4>Telegram</h4>
            <h5> Dossumbekov Serik</h5>
            <a href="https://t.me/Sezamitiii" target="_blank">
            Say Hi on Telegram
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" placeholder="Type Your Message Here"  rows="7" required></textarea>
          <button type="submit" className="btn third about-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;