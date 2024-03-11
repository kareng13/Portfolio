import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Header = ()  => {
    const { t, i18n } = useTranslation();

    const [language, setLanguage] = useState('en');
  
    const changeLanguage = (language) => {
  
      i18n.changeLanguage(language);
  
    };
  
    return(
        <section className="section_header">
        <div className="section_container">
          <div className="content_header">
            <p className="subtitle_header">{t('header.hi')}</p>
            <h1 className="title_header">
              {t('header.iam')}{" "}
              <span>
                Karen González
                <br />
              </span>
              Frontend
            </h1>
            <div className="action_btn_header">
              <a
                href="https://drive.google.com/file/d/1er2qS1SHAiQf_6tBOan2LIdh1Jo46y4t/view" target='_blank'
              >
                <button className="cv">{t('header.download')}</button>
              </a>
              <a href="#Portfolio">
                <button className="portfolio">{t('header.portfolio')}</button>
              </a>
            </div>
          </div>
          <div className="image_header">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/woman-web-developer-8184991-6547024.png"
              alt="Mia"
            />
          </div>
        </div>
      </section>
    )
}

export default Header;