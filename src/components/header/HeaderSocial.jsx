import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="#" target="_blank"><FiLinkedin /></a>
        <a href="https://github.com/sezamiti" target="_blank"><FiGithub /></a>
        <a href="#" target="_blank"><FiTwitter /></a>
    </div>
  )
}

export default HeaderSocial