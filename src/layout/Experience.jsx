import "../css/Experience.css";
import experienceEs from "../data/experience_es.json";
import experienceEn from "../data/experience_en.json";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import ExperienceChart from "../components/ExperienceChart";

function Experience() {
  const { language } = useContext(LanguageContext);
  const experienceData = language === "es" ? experienceEs : experienceEn;

  return (
    <div className="experience section" id="experience">
      <h1 className="active responsive">
        {language === "es" ? "EXPERIENCIA" : "EXPERIENCE"}
      </h1>
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
