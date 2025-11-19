import "../css/Experience.css";
import ExperienceChart from "../components/ExperienceChart";
import { useTranslation } from "react-i18next";

function Experience() {
  const { t } = useTranslation();

  const experienceData = t("experience", { returnObjects: true });

  return (
    <div className="experience section" id="experience">
      <h1 className="active responsive fade-in-section">{t("experience_title")}</h1>
      {experienceData.map((data, index) => (
        <div key={index} className={`fade-in-section delay-${(index % 5) * 100 + 100}`}>
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
