import github from '../assets/github.svg';
import Pill from './Pill';

function ProjectsChart({ id, url_project, url_repo, img, title, description, stack, style }) {
    return (
        <article className="project-card">
            <div className="project-image">
                <img src={img} alt={title} />
            </div>
            <div className="project-content">
                <header>
                    <div className="project-top">
                        <h3 className="project-title">
                            <a href={url_project} target="_blank" rel="noopener noreferrer">{title}</a>
                        </h3>
                        <div className="project-links">
                            {url_repo && (
                                <a href={url_repo} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repo">
                                    <img src={github} alt="GitHub" className="project-icon" />
                                </a>
                            )}
                            {url_project && (
                                <a href={url_project} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                                    {/* You might want an external link icon here, for now just text or reuse icon */}
                                    <span className="external-link-icon">↗</span>
                                </a>
                            )}
                        </div>
                    </div>
                </header>
                <div className="project-description">
                    <p>{description}</p>
                </div>
                <footer className="project-tech-list">
                    {stack.map((skill, index) => (
                        <Pill key={index} text={skill} />
                    ))}
                </footer>
            </div>
        </article>
    );
}

export default ProjectsChart;
