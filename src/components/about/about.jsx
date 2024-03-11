import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="section_about" id="About">
      <div className="about_container">
        <h1 className="title_about">
          {" "}
          <label> {"<"} </label>
          {t("about.aboutme")}
          <label> {">"} </label>
        </h1>
        <p className="content_about">
          {" "}
          {t("about.p1")} <span>{t("about.career")}</span> {t("about.p2")}
        </p>
      </div>
    </div>
  );
};

export default About;
