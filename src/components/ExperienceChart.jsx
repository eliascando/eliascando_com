import Pill from "./Pill";

function ExperienceChart({ title, place, period, skills }) {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <h3 className="experience-title">{title}</h3>
        <span className="experience-period">{period}</span>
      </div>
      <p className="experience-place">{place}</p>
      <div className="experience-skills">
        {skills.map((skill, index) => (
          <Pill key={index} text={skill} />
        ))}
      </div>
    </div>
  );
}

export default ExperienceChart;
