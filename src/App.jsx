import { useEffect, useState } from "react";
import Nav from "./layout/Nav";
import Content from "./layout/Content";
import { LanguageContext } from "./contexts/LanguageContext";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import useSectionObserver from "./hooks/useSectionObserver";

function App() {
  const [location, setLocation] = useState("about");
  const [language, setLanguage] = useState(() => {
    const languageStorage = localStorage.getItem("language");
    const languageNavigator = window.navigator.language.split(/[-_]/)[0];
    return existEngOrSpa(languageStorage)
      ? languageStorage
      : existEngOrSpa(languageNavigator)
      ? languageNavigator
      : "en";
  });

  const lang_spa = {
    es: "ES",
    en: "EN",
  };

  const lang_eng = {
    es: "ES",
    en: "EN",
  };

  useEffect(() => {
    localStorage.setItem("language", language);
    let selected = document.getElementById(language);
    if (selected) {
      selected.classList.add("selected");
    }
  }, [language]);

  useEffect(() => {
    const handleResize = () => {
      let width = window.innerWidth;
      console.log(width);
      if (width < 890) {
        console.log("menor a 890");
        let pipe = document.getElementById("pipe");
        let en = document.getElementById("en");
        let es = document.getElementById("es");
        if (pipe) pipe.style.display = "none";
        if (en) en.style.display = "none";
        if (es) es.classList.add("selected");
      } else {
        console.log("mayor a 890");
        let pipe = document.getElementById("pipe");
        let en = document.getElementById("en");
        if (pipe) pipe.style.display = "block";
        if (en) en.style.display = "block";
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function existEngOrSpa(lang) {
    return lang === "es" || lang === "en";
  }

  useSectionObserver(setLocation);

  return (
    <div className="App">
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <div className="language-switch fixed-bottom-div">
          <button
            id="language-switch-button"
            onClick={() => {
              let sel = language === "es" ? "en" : "es";
              setLanguage(sel);
              if (window.innerWidth < 890) {
                let selected = document.getElementById("es");
                if (selected) selected.classList.add("selected");
                let span = document.getElementById("es");
                if (span) {
                  span.innerHTML =
                    language === "es" ? lang_eng[sel] : lang_spa[sel];
                }
              } else {
                let selected = document.getElementById(sel);
                let notSelected = document.getElementById(language);
                if (selected) selected.classList.add("selected");
                if (notSelected) notSelected.classList.remove("selected");
              }
            }}
          >
            <span id="es">ES</span>
            <span id="pipe">|</span>
            <span id="en">EN</span>
          </button>
        </div>

        <Nav location={location} setLocation={setLocation} />

        <Content />
      </LanguageContext.Provider>

      <Analytics />
    </div>
  );
}

export default App;
