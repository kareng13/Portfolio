import { useTranslation } from 'react-i18next';
import Image from "next/image";
import HtmlIcon from "@/images/html_icon.png";
import CssIcon from "@/images/css_icon.png";
import JsIcon from "@/images/javascript_icon.png";
import PhpIcon from "@/images/php_icon.png";
import ReactIcon from "@/images/react_icon.png";
import NextIcon from "@/images/nextjs_icon.png";
import GitIcon from "@/images/git_icon.png";
import MysqlIcon from "@/images/mysql_icon.png";

const Skills = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="section_skills" id="Skills">
      <div className="title_skills">
        <h1>{"<"}{t('skills.myskills')}{">"}</h1>
      </div>
      <div className="container_sk">
      <div className="content_skills">
        <div className="skill_title">
          <div className="img_skill">
          <Image src={HtmlIcon} />
          </div>
          <p>Html</p>
        </div>
      </div>
      <div className="content_skills">
        <div className="skill_title">
          <div className="img_skill">
          <Image src={CssIcon} />
          </div>
          <p>CSS</p>
        </div>
      </div>
      <div className="content_skills">
        <div className="skill_title">
          <div className="img_skill">
          <Image src={JsIcon} />
          </div>
          <p>JavaScript</p>
        </div>
      </div>
      <div className="content_skills">
        <div className="skill_title">
          <div className="img_skill">
          <Image src={PhpIcon} />
          </div>
          <p>php</p>
        </div>
      </div>
      <div className="content_skills">
        <div className="skill_title">
          <div className="img_skill">
          <Image src={ReactIcon} />
          </div>
          <p>React</p>
        </div>
      </div>
      <div className="content_skills">
        <div className="skill_title">
          <div className="img_skill">
          <Image src={NextIcon} />
          </div>
          <p>Next.js</p>
        </div>
      </div>
      <div className="content_skills">
        <div className="skill_title">
          <div className="img_skill">
          <Image src={GitIcon} />
          </div>
          <p>git</p>
        </div>
      </div>
      <div className="content_skills">
        <div className="skill_title">
          <div className="img_skill">
          <Image src={MysqlIcon} />
          </div>
          <p>MySql</p>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Skills;
