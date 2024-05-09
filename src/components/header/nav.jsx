import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

function Nav() {
  const { t, i18n } = useTranslation(); //translation
  const [language, setLanguage] = useState("en"); //Translation
  const [isDarkMode, setIsDarkMode] = useState(false); //dark-mode
  const [isAsideOpen, setIsAsideOpen] = useState(false); //estado aside
  


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); 
    const newIsDarkMode = !isDarkMode; 
    document.body.classList.toggle("dark", newIsDarkMode); 
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const leftClick = () => {
    btn.style.left = "0";
    setLanguage("es");
    i18n.changeLanguage("es");
  };

  const rightClick = () => {
    setLanguage("en");
    btn.style.left = "44px";
    i18n.changeLanguage("en");
  };

  const toggleAside = () => {
    setIsAsideOpen(!isAsideOpen); //Cambiar el estado del aside
  };
  const handleNavLinkClick = () => {
    setIsAsideOpen(false); // Cerrar el menú de navegación al hacer clic en un enlace
  };
  return (
    // main container start
    <div className={`main-container ${isAsideOpen ? 'aside-open' : ''}`}>
      {/* aside start */}
      <div className={`aside ${isAsideOpen ? 'open' : ''}`}>
        <div className="logo">
          <a href="#">
            <span>K</span>aren
          </a>
        </div>
        <div className="nav-toggler" onClick={toggleAside}>
        <span></span>
        </div>
        <ul className="nav">
          <li>
            <Link href="#" onClick={handleNavLinkClick}>{t("nav.home")}</Link>
          </li>
          <li>
            <Link href="#About" onClick={handleNavLinkClick}>{t("nav.about")}</Link>
          </li>
          <li>
            <Link href="#Skills" onClick={handleNavLinkClick}>{t("nav.skills")}</Link>
          </li>
          <li>
            <Link href="#Portfolio" onClick={handleNavLinkClick}>{t("nav.portfolio")}</Link>
          </li>
          <li>
            <Link href="#Contact" onClick={handleNavLinkClick}>{t("nav.contact")}</Link>
          </li>
          <li>
            <div className="style-switch-transl">
              <div className="form-box">
                <div className="button-box">
                  <div id="btn"></div>
                  <button
                    type="button"
                    className="toggle-btn"
                    onClick={leftClick}
                  >
                    ES
                  </button>
                  <button
                    type="button"
                    className="toggle-btn"
                    onClick={rightClick}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* aside end */}
      <div className="main-content">
        {/* home section start */}
        <section className="home section">
          <div className="container">
            <div className="row">
              <div className="home-info padd-15">
                <h3 className="hello">{t("header.hi")}</h3>
                <h3 className="hello-name">
                  {t("header.iam")} <span>Karen González</span>
                </h3>
                <h3 className="hello-sub">
                  <span>Frontend</span>
                </h3>
                <div className="row">
                  <div className="buttons">
                    <a
                      href="https://drive.google.com/file/d/1ibPzTdzPV-veJll7HlGGlJHWu9hyZHWl/view?usp=sharing"
                      target="_blank"
                      className="btn hire-me"
                    >
                      {t("header.download")}
                    </a>
                    <a href="#Portfolio" className="btn hire-me">
                      {t("header.portfolio")}
                    </a>
                  </div>
                </div>
              </div>
              <div className="home-img padd-15">
                <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/woman-with-optical-5143562-4308126.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* home section end */}
      </div>
      {/* main container end */}
      {/* Style START */}
      <div className="style-switch">
        <div className="day-night s-icon" onClick={toggleDarkMode}>
        {isDarkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brightness-high-fill" viewBox="0 0 16 16">
  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-moon-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
          </svg>
        )}
        </div>
      </div>
    </div>
    // Style END
  );
}

export default Nav;
