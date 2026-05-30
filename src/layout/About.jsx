import "../css/About.css";
import { useTranslation } from "react-i18next";
import FadeIn from "../components/FadeIn";

function About() {
  const { t } = useTranslation();

  return (
    <section className="about-section section" id="about">
      <FadeIn className="hero-content">
        <p className="hero-greeting">{t("about.greeting") || "Hola, mi nombre es"}</p>
        <h1 className="hero-name">Elías Cando.</h1>
        <h2 className="hero-title">{t("about.title")}</h2>
        <p className="hero-description">{t("about.intro")}</p>
        <p className="hero-description">{t("about.actual_job")}</p>
        <div className="hero-cta">
          <button
            className="cta-button"
            onClick={() => {
              document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t("about.cta")}
          </button>
        </div>
      </FadeIn>
    </section>
  );
}


export default About;
