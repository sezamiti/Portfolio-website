import React from 'react'
import './header.css'
import ME from '../../assets/ava.png';
import CTA from './CTA';
import HeaderSocial from './HeaderSocial';
import LanguageFlags from './LanguageFlag';
import { useTranslation } from "react-i18next";



function Header() {

  const { t } = useTranslation();

  return (
    <header>
      <LanguageFlags/>
      <div className="container header__container">
        <h5>{t('Hello, People know me as')}</h5>
        <h1>{t('Dossumbekov Serik')}</h1>
        <h5 className="text-light">{t('Front-end Developer')}</h5>
        <CTA />
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="Dossumbekov Serik" />
        </div>
        <a href="#contact" className='scroll__down'>{t('Scroll Down')}</a>
      </div>
    </header>
  )
}

export default Header