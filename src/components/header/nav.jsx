import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Nav = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  

  const leftClick = () => {
    btn.style.left = '0';
    setLanguage('es');
    i18n.changeLanguage('es');
  };

  const rightClick = () => {
    setLanguage('en');
    btn.style.left = '39px';
    i18n.changeLanguage('en');
  };

  return (
    <>
      {" "}
      <nav>
        <div className="nav_content">
          <div className="logo_nav">
            <a href="#" className="">
              Karen
            </a>
          </div>
          <label htmlFor="check" className="checkbox_nav">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-code"
              viewBox="0 0 16 16"
            >
              <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z" />
            </svg>
          </label>
          <input
            type="checkbox"
            name="check"
            id="check"
            checked={menuOpen}
            onChange={() => setMenuOpen(!menuOpen)}
          />
          <ul className="nav_ul" onClick={handleLinkClick}>
            <li>
              <a href="#">{t('nav.home')}</a>
            </li>
            <li>
              <a href="#About">{t('nav.about')}</a>
            </li>
            <li>
              <a href="#Skills">{t('nav.skills')}</a>
            </li>
            <li>
              <a href="#Portfolio">{t('nav.portfolio')}</a>
            </li>
            <li>
              <a href="#Contact">{t('nav.contact')}</a>
            </li>
          <div className="form-box">
            <div className="button-box">
              <div id='btn'></div>
              <button type="button" className="toggle-btn" onClick={leftClick}>
          ES
        </button>
        <button type="button" className="toggle-btn" onClick={rightClick}>
          EN
        </button>
              </div>
          </div>
              </ul>
        </div>
      </nav>
      
    </>
  );
};
export default Nav;