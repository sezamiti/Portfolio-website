import React from "react";
import Resume from '../../assets/cv.pdf'
import { useTranslation } from "react-i18next";

const CTA = () => {

  const { t } = useTranslation();

    return (
      <div className='cta'>
          <a href={Resume} download className='btn third ' >{t('Download Resume')}</a>
          <a href="#contact" className='btn third btn-primary'>{t('Talk To Me')}</a>
      </div>
    )
  }
  
  export default CTA