import "../css/Footer.css";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import mail from "../assets/mail.svg";
import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer fade-in-section" id="contact">
            <h2 className="footer-title">{t("footer.title")}</h2>
            <h1 className="footer-heading">{t("footer.heading")}</h1>
            <p className="footer-text">{t("footer.text")}</p>

            <div className="footer-socials">
                <a
                    href="https://github.com/eliascando/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={github} alt="github" />
                </a>
                <a
                    href="https://linkedin.com/in/eliascando"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={linkedin} alt="linkedin" />
                </a>
                <a
                    href="mailto:contact@eliascando.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={mail} alt="mail" />
                </a>
            </div>

            <div className="footer-credit">
                <p>{t("footer.credit")}</p>
            </div>
        </footer>
    );
}

export default Footer;
