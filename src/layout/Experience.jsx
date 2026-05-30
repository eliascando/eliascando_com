import "../css/Experience.css";
import ExperienceChart from "../components/ExperienceChart";
import { useTranslation } from "react-i18next";
import portfolioContent from "../data/portfolioContent";
import FadeIn from "../components/FadeIn";

function Experience() {
  const { t, i18n } = useTranslation();

  const language = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];
  const experienceData = portfolioContent[language]?.experience ?? portfolioContent.en.experience;

  return (
    <div className="experience section" id="experience">
      <FadeIn as="h1" className="active responsive">{t("experience_title")}</FadeIn>
      {experienceData.map((data, index) => (
        <FadeIn key={index} className={`delay-${(index % 5) * 100 + 100}`}>
          <ExperienceChart
            title={data.title}
            place={data.place}
            period={data.period}
            skills={data.skills}
          />
        </FadeIn>
      ))}
    </div>
  );
}

export default Experience;
