import React from 'react'
import './header.css'
import ME from '../../assets/me.png';
import CTA from './CTA';
import HeaderSocial from './HeaderSocial';


function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, People know me as</h5>
        <h1>Dossumbekov Serik</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="Dossumbekov Serik" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header