import github from '../assets/github.svg';
import Pill from './Pill';

function ProjectsChart(data) {

    const { id, url_project, url_repo, img, title, description, stack, style } = data;

    return (
        <article>
            <a href={url_project} target='_blank' rel="noopener noreferrer">
                <img src={img} alt={title} />
                <h1>
                    {title}
                    <a href={url_repo} target='_blank' rel="noopener noreferrer">
                        <img
                            src={github}
                            style={style}
                            alt="GitHub Repository"
                        />
                    </a>
                </h1>
                <p>{description}</p>
                {
                    stack.map((skill, index) => (
                        <Pill key={index} text={skill} />
                    ))
                }
            </a>
        </article>
    );
}

export default ProjectsChart;
