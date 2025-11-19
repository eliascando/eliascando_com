import "../css/Content.css";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Footer from "./Footer";

function Content() {
  return (
    <div className="content">
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default Content;
