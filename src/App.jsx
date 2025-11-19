import { useEffect, useState } from "react";
import Nav from "./layout/Nav";
import Content from "./layout/Content";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import useSectionObserver from "./hooks/useSectionObserver";
import useScrollAnimation from "./hooks/useScrollAnimation";
import i18n from "./utils/i18n";
import CursorSpotlight from "./components/CursorSpotlight";

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
  useScrollAnimation();

  return (
    <div className="App">
      <Nav
        location={location}
        setLocation={setLocation}
        language={language}
        setLanguage={setLanguage}
      />
      <CursorSpotlight />
      <Content />
      <Analytics />
    </div>
  );
}

export default App;
