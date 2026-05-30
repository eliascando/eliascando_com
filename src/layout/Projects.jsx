import "../css/Projects.css";
import ProjectsChart from "../components/ProjectsChart.jsx";
import imagesMap from "../data/imagesProjects.js";
import { useTranslation } from "react-i18next";
import portfolioContent from "../data/portfolioContent";
import FadeIn from "../components/FadeIn";

function Projects() {
  const { t, i18n } = useTranslation();

  const language = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];
  const projectsData = portfolioContent[language]?.projects ?? portfolioContent.en.projects;

  return (
    <div className="projects section" id="projects">
      <FadeIn as="h1" className="active responsive">{t("projects_title")}</FadeIn>
      {projectsData.map((data, index) => (
        <FadeIn key={data.id} className={`delay-${(index % 5) * 100 + 100}`}>
          <ProjectsChart
            url_project={data.link_to_project}
            url_repo={data.link_to_repo}
            img={imagesMap[data.image_source]}
            title={data.title}
            description={data.description}
            stack={data.stack}
          />
        </FadeIn>
      ))}
    </div>
  );
}

export default Projects;
