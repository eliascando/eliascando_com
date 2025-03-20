import "../css/Content.css";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";

function Content() {
  return (
    <div className="content">
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default Content;
