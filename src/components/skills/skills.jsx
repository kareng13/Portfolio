import React from 'react'
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import HtmlIcon from "@/images/html_icon.png";
import CssIcon from "@/images/css_icon.png";
import JsIcon from "@/images/javascript_icon.png";
import PhpIcon from "@/images/php_icon.png";
import ReactIcon from "@/images/react_icon.png";
import NextIcon from "@/images/nextjs_icon.png";
import GitIcon from "@/images/git_icon.png";
import MysqlIcon from "@/images/mysql_icon.png";

function Skills() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
            {/* services section start */}
            <div className="main-content">
            <div className="skill section" id='Skills'>
          <div className="container">
            <div className="row">
              <div className="section-title padd-15">
                <h2>{"<"}{t('skills.myskills')}{">"}</h2>
              </div>
            </div>
            <div className="row">
              <div className="skill-item padd-15">
                <div className="skill-item-inner">
                  <div className="icon">
                  <Image src={HtmlIcon} alt='Html' />
                  </div>
                  <p>Html</p>
                </div>
              </div>
              <div className="skill-item padd-15">
                <div className="skill-item-inner">
                  <div className="icon">
                  <Image src={CssIcon} alt='Html' />
                  </div>
                  <p>Css</p>
                </div>
              </div>
              <div className="skill-item padd-15">
                <div className="skill-item-inner">
                  <div className="icon">
                  <Image src={JsIcon} alt='Html' />
                  </div>
                  <p>JavaScript</p>
                </div>
              </div>
              <div className="skill-item padd-15">
                <div className="skill-item-inner">
                  <div className="icon">
                  <Image src={PhpIcon} alt='Html' />
                  </div>
                  <p>Php</p>
                </div>
              </div>
              <div className="skill-item padd-15">
                <div className="skill-item-inner">
                  <div className="icon">
                  <Image src={ReactIcon} alt='Html' />
                  </div>
                  <p>React</p>
                </div>
              </div>
              <div className="skill-item padd-15">
                <div className="skill-item-inner">
                  <div className="icon">
                  <Image src={NextIcon} alt='Html' />
                  </div>
                  <p>Next.js</p>
                </div>
              </div>
              <div className="skill-item padd-15">
                <div className="skill-item-inner">
                  <div className="icon">
                  <Image src={GitIcon} alt='Html' />
                  </div>
                  <p>git</p>
                </div>
              </div>
              <div className="skill-item padd-15">
                <div className="skill-item-inner">
                  <div className="icon">
                  <Image src={MysqlIcon} alt='Html' />
                  </div>
                  <p>Mysql</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* services section end */}
        </>
  )
}

export default Skills;