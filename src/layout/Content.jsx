import '../css/Content.css'
import About from './About';
import Projects from './Projects';
import Experience from './Experience';

function Content(props) {

    const { location, setLocation } = props;
    
    return(
        <div className="content">
            <About 
                location={location}
                setLocation={setLocation}
            />
            <Experience 
                location={location}
                setLocation={setLocation}
            />
            <Projects 
                location={location}
                setLocation={setLocation}
            />
        </div>
    )
}

export default Content
