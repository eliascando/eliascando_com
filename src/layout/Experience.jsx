import "../css/Experience.css";
import ExperienceChart from "../components/ExperienceChart";
import { useTranslation } from "react-i18next";
import portfolioContent from "../data/portfolioContent";

function Experience() {
  const { t, i18n } = useTranslation();

  const language = i18n.resolvedLanguage || i18n.language;
  const experienceData = portfolioContent[language]?.experience ?? portfolioContent.en.experience;

  return (
    <div className="experience section" id="experience">
      <h1 className="active responsive fade-in-section">{t("experience_title")}</h1>
      {experienceData.map((data, index) => (
        <div key={`${data.place}-${data.period}`} className={`fade-in-section delay-${(index % 5) * 100 + 100}`}>
          <ExperienceChart
            title={data.title}
            place={data.place}
            period={data.period}
            skills={data.skills}
          />
        </div>
      ))}
    </div>
  );
}

export default Experience;
