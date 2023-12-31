import '../css/About.css'

function About(props){
    
    const { setLocation } = props;

    return(
        <div 
            className="about"
            onMouseOver={() => setLocation('about')}
            id='about'
        >
            <h1 className='active responsive'>ACERCA DE</h1>
            <p>
                Desarrollador web y estudiante de Ingeniería en Software, con una pasión desenfrenada por construir experiencias digitales.
            </p>
            <p>
                Disfruto colaborando en equipos para alcanzar objetivos comunes participando en proyectos personales y profesionales
            </p>
            <p>
                Actualmente estoy trabajando como desarrollador web en una importante empresa de producción de camarón.
                Donde he tenido la oportunidad de trabajar en proyectos de desarrollo de software en todo su ciclo de vida.
            </p>
            <p>
                Cuando no estoy codificando, me entretengo resolviendo rompecabezas, andando en bici o escuchando música.
            </p>
            <p>
                Mi filosofía: Siempre estoy en búsqueda constante de conocimiento y bienestar.
            </p>
        </div>
    )
}

export default About