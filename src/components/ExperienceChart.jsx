import Pill from "./Pill";

function ExperienceChart(data) {
  const { title, place, period, skills } = data;
  return (
    <section>
      <h2>{title}</h2>
      <p
        style={{
          marginTop: "0.5rem",
          fontWeight: "bolder",
        }}
      >
        <strong>{place}</strong>
      </p>
      <p>{period}</p>
      <p
        style={{
          marginTop: "0.5rem",
        }}
      >
        {skills.map((skill, index) => (
          <Pill key={index} text={skill} />
        ))}
      </p>
    </section>
  );
}

export default ExperienceChart;
