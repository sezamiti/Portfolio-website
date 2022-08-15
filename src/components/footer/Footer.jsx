import React from 'react'
import './footer.css';
import { BsStackOverflow} from 'react-icons/bs';
import { FaInstagram} from 'react-icons/fa';
import { FaTelegramPlane } from "react-icons/fa";

import { useTranslation } from "react-i18next";

const Footer = () => {

  const { t } = useTranslation();

  return (
    <footer>
      <a href="#" className='footer__logo'>Dossumbekov Serik</a>

      <ul className='permalinks'>
        <li><a href="#">{t('Home')}</a></li>
        <li><a href="#about">{t('About Serik')}</a></li>
        <li><a href="#experience">{t('Experience')}</a></li>
        <li><a href="#portfolio">{t("Portfolio")}</a></li>
        <li><a href="#contact">{t("Contact me")}</a></li>

      </ul>

      <div className="footer__socials">
        <a href="№" target="blank"><BsStackOverflow/></a>
        <a href="https://www.instagram.com/sezamitiii/" target="blank"><FaInstagram/></a>
        <a href="https://t.me/Sezamitiii" target="_blank"><FaTelegramPlane/></a>
      </div>

      <div className="footercopyright">
        <small>&copy; Dossumbekov Serik. All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer;