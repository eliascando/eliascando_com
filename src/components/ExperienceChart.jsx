import Pill from "./Pill";

function ExperienceChart(data){

    const { title, place, period, skills } = data;
    return (
        <section>
            <h2>{title}</h2>
            <p><strong>{place}</strong></p>
            <p>{period}</p>
            <p>
                {
                    skills.map((skill, index) => (
                        <Pill key={index} text={skill} />
                    ))
                }
            </p>
        </section>
    )
}

export default ExperienceChart;