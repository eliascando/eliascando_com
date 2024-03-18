import '../css/Projects.css'
import projects_es from '../data/projects_es.json'
import projects_en from '../data/projects_en.json'
import ProjectsChart from '../components/ProjectsChart.jsx';
import imagesMap from '../data/imagesProjects.js';
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

function Projects(props){

    const { setLocation } = props;

    const { language } = useContext(LanguageContext);

    const projectsData = language === 'es' ? projects_es : projects_en;

    return(
        <div
            className="projects"
            onMouseOver={() => setLocation('projects')}
            id="projects"
        >
            <h1 className='active responsive'>
            {
                language === 'es' ? 'PROYECTOS' : 'PROJECTS'
            }
            </h1>
            {
                projectsData.map((data, index) => (
                    <ProjectsChart
                        key={index}
                        id={data.id}
                        url_project={data.link_to_project}
                        url_repo={data.link_to_repo}
                        img={imagesMap[data.image_source]}
                        title={data.title}
                        description={data.description}
                        stack={data.stack}
                        style={data.style}
                    />
                ))
            }
        </div>
    )
}

export default Projects
