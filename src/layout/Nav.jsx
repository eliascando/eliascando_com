import { useState } from "react";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import mail from "../assets/mail.svg";
import "../css/Nav.css";
import { useTranslation } from "react-i18next";

function Nav({ location, setLocation, language, setLanguage }) {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="nav">
      <div className="nav-logo">
        <a href="#" onClick={() => window.scrollTo(0, 0)}>EC</a>
      </div>

      <div className="mobile-menu-toggle" onClick={toggleMenu}>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <button
              className={location === "about" ? "active" : ""}
              onClick={() => {
                setLocation("about");
                document.getElementById("about").scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              <span className="nav-number">01.</span> {t("nav.about")}
            </button>
          </li>
          <li>
            <button
              className={location === "experience" ? "active" : ""}
              onClick={() => {
                setLocation("experience");
                document.getElementById("experience").scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              <span className="nav-number">02.</span> {t("nav.experience")}
            </button>
          </li>
          <li>
            <button
              className={location === "projects" ? "active" : ""}
              onClick={() => {
                setLocation("projects");
                document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              <span className="nav-number">03.</span> {t("nav.projects")}
            </button>
          </li>
          <li>
            <button
              className="nav-lang-btn"
              onClick={() => {
                const newLang = language === "es" ? "en" : "es";
                setLanguage(newLang);
                closeMenu();
              }}
            >
              {language === "es" ? "EN" : "ES"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
