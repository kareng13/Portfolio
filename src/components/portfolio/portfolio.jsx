import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import speechtotext from "@/images/projects/speech-to-text.png"
import rvLogin from "@/images/projects/reservation_login.png"
import rvIndex1 from "@/images/projects/reservation_index1.png"
import rvIndex2 from "@/images/projects/reservation_index2.png"

const Portfolio = () => {
    const { t, i18n } = useTranslation();

    const [imageIndex, setImageIndex] = useState(0);
  const images = [rvLogin, rvIndex1]; 

    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };

    useEffect(() => {
      const intervalId = setInterval(() => {
        setImageIndex(prevIndex => (prevIndex + 1) % images.length);
      }, 2000);
  
      return () => clearInterval(intervalId);
    }, [images.length]);

  return (
    <div className="section_portfolio" id="Portfolio">
    <h2 className="title_skills">{'<'}{t("portfolio.portfolio")}{">"}</h2>
    <div className="container_portfolio">
      <div className="content_portfolio">
        <div className="card mb-3 card_portfolio">
          <div className="row g-2 row_card">
            <div className="col-md-4">
              <Image src={speechtotext} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="card-title">
                  <h3>{t("portfolio.pj1_title")}</h3>
                </div>
                <div className="card-subtitle">
                  <h4>{t('portfolio.technologies')} 
                    <span>HTML</span>
                    ,
                    <span>CSS</span>
                    ,
                    <span>JavaScript</span>
                  </h4>
                  <div className="card-text">
                    <ul>
                      <li>{t("portfolio.li1")}</li>
                    </ul>
                  </div>
                  <div className="card_icon">
                    <a href="https://kgg-speech-to-text.vercel.app/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-eye-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                </svg>
                  </a>
                  <a href="https://github.com/kareng13/speech-to-text.git" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
                </a>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 card_portfolio">
          <div className="row g-2 row_card">
            <div className="col-md-4">
            <Image src={images[imageIndex]} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="card-title">
                  <h3>{t("portfolio.pj2_title")}</h3>
                </div>
                <div className="card-subtitle">
                  <h4>{t('portfolio.technologies')}: 
                    <span> PHP</span>
                    ,
                    <span> CSS</span>
                    ,
                    <span> JavaScript</span>
                  </h4>
                  <div className="card-text">
                    <ul>
                      <li>{t("portfolio.li2")}</li>
                      <li>{t("portfolio.li2_1")}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 card_portfolio">
          <div className="row g-2 row_card">
            <div className="col-md-4">
              <img src="https://i.insider.com/57602a8cdd08956f068b4e87?width=700" alt="" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="card-title">
                  <h3>Diccionario </h3>
                </div>
                <div className="card-subtitle">
                  <h4>{t('portfolio.technologies')}: 
                    <span> HTML</span>
                    ,
                    <span> CSS</span>
                    ,
                    <span> JavaScript</span>
                  </h4>
                  <div className="card-text">
                    <ul>
                      <li>Real time liste the voice</li>
                      <li>Just for fun</li>
                      <li>good looking ui</li>
                    </ul>
                  </div>
                  <div className="card_icon">
                    <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-eye-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                </svg></a>
                <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg></a>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Portfolio;
