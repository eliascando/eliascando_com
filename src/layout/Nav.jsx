import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import mail from "../assets/mail.svg";
import "../css/Nav.css";
import { useTranslation } from "react-i18next";

function Nav({ location, setLocation }) {
  const { t } = useTranslation();

  return (
    <div className="nav">
      <div className="presentacion-perfil">
        <h1>Elías Cando</h1>
        <h4>{t("about.title")}</h4>
        <p>{t("about.presentation")}</p>
      </div>
      <div className="menu-page">
        <ul>
          <li>
            <button
              className={location === "about" ? "active" : ""}
              onClick={() => {
                setLocation("about");
                document.getElementById("about").scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                });
              }}
            >
              {t("nav.about")}
            </button>
          </li>
          <li>
            <button
              className={location === "experience" ? "active" : ""}
              onClick={() => {
                setLocation("experience");
                document.getElementById("experience").scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              {t("nav.experience")}
            </button>
          </li>
          <li>
            <button
              className={location === "projects" ? "active" : ""}
              onClick={() => {
                setLocation("projects");
                document.getElementById("projects").scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              {t("nav.projects")}
            </button>
          </li>
        </ul>
      </div>
      <div className="redes-sociales">
        <a
          href="mailto:contact@eliascando.com"
          target="_blank"
          rel="noreferrer"
        >
          <img height="30px" width="30px" src={mail} alt="mail" />
        </a>
        <a
          href="https://github.com/eliascando/"
          target="_blank"
          rel="noreferrer"
        >
          <img height="30px" width="30px" src={github} alt="github" />
        </a>
        <a
          href="https://linkedin.com/in/eliascando"
          target="_blank"
          rel="noreferrer"
        >
          <img height="30px" width="30px" src={linkedin} alt="linkedin" />
        </a>
      </div>
    </div>
  );
}

export default Nav;
