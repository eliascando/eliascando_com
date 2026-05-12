import "../css/Projects.css";
import ProjectsChart from "../components/ProjectsChart.jsx";
import imagesMap from "../data/imagesProjects.js";
import { useTranslation } from "react-i18next";
import portfolioContent from "../data/portfolioContent";

function Projects() {
  const { t, i18n } = useTranslation();

  const language = i18n.resolvedLanguage || i18n.language;
  const projectsData = portfolioContent[language]?.projects ?? portfolioContent.en.projects;

  return (
    <div className="projects section" id="projects">
      <h1 className="active responsive fade-in-section">{t("projects_title")}</h1>
      {projectsData.map((data, index) => (
        <div key={data.id} className={`fade-in-section delay-${(index % 5) * 100 + 100}`}>
          <ProjectsChart
            url_project={data.link_to_project}
            url_repo={data.link_to_repo}
            img={imagesMap[data.image_source]}
            title={data.title}
            description={data.description}
            stack={data.stack}
          />
        </div>
      ))}
    </div>
  );
}

export default Projects;
