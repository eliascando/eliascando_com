import "../css/Experience.css";
import ExperienceChart from "../components/ExperienceChart";
import { useTranslation } from "react-i18next";

function Experience() {
  const { t } = useTranslation();

  const experienceData = t("experience", { returnObjects: true });

  return (
    <div className="experience section" id="experience">
      <h1 className="active responsive">{t("experience_title")}</h1>
      {experienceData.map((data, index) => (
        <ExperienceChart
          key={index}
          title={data.title}
          place={data.place}
          period={data.period}
          skills={data.skills}
        />
      ))}
    </div>
  );
}

export default Experience;
