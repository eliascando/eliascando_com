import { useEffect, useState } from "react";
import Nav from "./layout/Nav";
import Content from "./layout/Content";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import useSectionObserver from "./hooks/useSectionObserver";
import i18n from "./utils/i18n";

function App() {
  const [location, setLocation] = useState("about");

  const [language, setLanguage] = useState(() => {
    const stored = localStorage.getItem("language");
    const browser = window.navigator.language.split(/[-_]/)[0];
    return stored === "es" || stored === "en"
      ? stored
      : browser === "es" || browser === "en"
      ? browser
      : "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
  }, [language]);

  useSectionObserver(setLocation);

  return (
    <div className="App">
      <div className="language-switch fixed-bottom-div">
        <button
          id="language-switch-button"
          onClick={() => {
            const newLang = language === "es" ? "en" : "es";
            setLanguage(newLang);
          }}
        >
          <span>{language === "es" ? "EN" : "ES"}</span>
        </button>
      </div>

      <Nav location={location} setLocation={setLocation} />
      <Content />
      <Analytics />
    </div>
  );
}

export default App;
