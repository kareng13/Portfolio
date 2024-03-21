import React from 'react'
import { useTranslation } from "react-i18next";

function About() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
            {/* about section start */}
            <div className="main-content">
            <section className="about section" id='About'>
            <div className="container">
              <div className="row">
                <div className="section-title padd-15">
                  <h2>{"<"}{t("about.aboutme")}{">"}</h2>
                </div>
              </div>
              <div className="row">
                <div className="about-content padd-15">
                  <div className="row">
                    <div className="about-text padd-15">
                      <p> {t("about.p1")} <span>{t("about.career")}</span> {t("about.p2")}  </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </div>
          {/* about section END */}
          </>
  );
};

export default About;