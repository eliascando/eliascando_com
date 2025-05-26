import "../css/About.css";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="about section" id="about">
      <h1 className="active responsive">{t("about_title")}</h1>
      <p>{t("about.intro")}</p>
      <p>{t("about.actual_job")}</p>
      <p>{t("about.thinking")}</p>
    </div>
  );
}

export default About;
