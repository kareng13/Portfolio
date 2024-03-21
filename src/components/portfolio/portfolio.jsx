import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import Image from 'next/image';
import speechtotext from "@/images/projects/speech-to-text.png";
import portfoliopy from "@/images/projects/portfolio.png";
import rvLogin from "@/images/projects/reservation_login.png";
import rvIndex1 from "@/images/projects/reservation_index1.png";

function Portfolio() {
  const { t, i18n } = useTranslation(); //translation

  const [imageIndex, setImageIndex] = useState(0);
  const images = [rvLogin, rvIndex1]; 

  const changeLanguage = (language) => {
    //translation
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [images.length]);
  return (
    <>
    <div className="main-content">
              {/* portfolio section start */}
              <section className="portfolio section" id='Portfolio'>
          <div className="container">
            <div className="row">
              <div className="section-title padd-15">
                <h2>{'<'}{t("portfolio.portfolio")}{">"}</h2>
              </div>
            </div>
            <div className="row">
              {/* portfolio item start */}
              <div className="portfolio-item padd-15">
                <div className="portfolio-item-inner shadow-dark">
                  <div className="portfolio-img">
                  <Image src={speechtotext} alt="speech-to-text"/>
                  </div>
                  <div className="portfolio-hover">
                  <h3>{t("portfolio.pj1_title")}</h3>
                  <h5> 
                    <span> HTML</span>
                    ,
                    <span> CSS</span>
                    ,
                    <span> JavaScript</span>
                  </h5>
                  <li>
                    <p>{t("portfolio.li1")}</p>
                  </li>
                  <div className="portfolio-icons">
                  <a href="https://kgg-speech-to-text.vercel.app/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                    </svg>
                    </a>
                    <a href="https://github.com/kareng13/speech-to-text.git" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                    </a>
                  </div>
                </div>
                </div>
              </div>
              <div className="portfolio-item padd-15">
                <div className="portfolio-item-inner shadow-dark">
                  <div className="portfolio-img">
                  <Image src={images[imageIndex]} alt="reservation"/>
                  </div>
                  <div className="portfolio-hover">
                  <h3>{t("portfolio.pj2_title")}</h3>
                  <h5> 
                    <span> PHP</span>
                    ,
                    <span> CSS</span>
                    ,
                    <span> JavaScript</span>
                  </h5>
                  <li>
                  <p>{t("portfolio.li2")}</p>
                  <p>{t("portfolio.li2_1")}</p>
                  </li>
                </div>
                </div>
              </div>
              <div className="portfolio-item padd-15">
                <div className="portfolio-item-inner shadow-dark">
                  <div className="portfolio-img">
                  <Image src={portfoliopy} alt="speech-to-text"/>
                  </div>
                  <div className="portfolio-hover">
                  <h3>{t("portfolio.pj3_title")}</h3>
                  <h5> 
                    <span> HTML</span>
                    ,
                    <span> CSS</span>
                    ,
                    <span> JavaScript</span>
                  </h5>
                  <li>
                  <p>{t("portfolio.li3")}</p>
                  </li>
                  <div className="portfolio-icons">
                    <a href="https://github.com/kareng13/Portfolio" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                    </a>
                  </div>
                </div>
                </div>
              </div>
              {/* portfolio item END */}
            </div>
          </div>
        </section>
        {/* portfolio section end*/}
    </div>
    </>
  )
}

export default Portfolio;