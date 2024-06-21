import '../css/About.css'
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import about_es from '../data/about_es.json';
import about_en from '../data/about_en.json';

function About(props){
    
    const { setLocation } = props;

    const { language } = useContext(LanguageContext);

    const aboutData = language === 'es' ? about_es : about_en;

    return(
        <div 
            className="about"
            onMouseOver={() => setLocation('about')}
            id='about'
        >
            <h1 className='active responsive'>
            {
                language === 'es' ? 'ACERCA DE MI' : 'ABOUT'
            }
            </h1>
            <p>
                {aboutData.intro}
            </p>
            <p>
                {aboutData.team_group}
            </p>
            <p>
                {aboutData.actual_job}
            </p>
            <p>
                {aboutData.free_time}
            </p>
            <p>
                {aboutData.thinking}
            </p>
        </div>
    )
}

export default About;