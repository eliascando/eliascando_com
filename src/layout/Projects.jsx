import "../css/Projects.css";
import ProjectsChart from "../components/ProjectsChart.jsx";
import imagesMap from "../data/imagesProjects.js";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  const projectsData = t("projects", { returnObjects: true });

  return (
    <div className="projects section" id="projects">
      <h1 className="active responsive">{t("projects_title")}</h1>
      {projectsData.map((data, index) => (
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
      ))}
    </div>
  );
}

export default Projects;
