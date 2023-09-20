import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'
import '../css/Nav.css'

function Nav(props) {

    const { location, setLocation } = props;

    return(
        <div className='nav'>
            <div className='presentacion-perfil'>
                <h1>Elías Cando</h1>
                <h4>Desarrollador de Software</h4>
                <p>Enfocado en la creación de soluciones de calidad y la mejora continua.</p>
                {/*<p>{window.navigator.language}</p>*/}
            </div>
            <div className="menu-page">
                <ul>
                    <li>
                        <button
                        className={location === 'about' ? 'active' : ''}
                        onClick={
                            () => {
                                setLocation('about')
                                const about = document.getElementById('about')
                                about.scrollIntoView({behavior: 'smooth', block: 'end'})
                            }
                        }
                    >ACERCA DE MI</button></li>
                    <li><button
                        className={location === 'experience' ? 'active' : ''}
                        onClick={() => {
                            setLocation('experience')
                            const experience = document.getElementById('experience')
                            experience.scrollIntoView
                            ({
                                behavior: 'smooth',
                                block: 'start'
                            })
                        }}
                    >EXPERIENCIA</button></li>
                    <li><button
                        className={location === 'projects' ? 'active' : ''}
                        onClick={() => {
                            setLocation('projects')
                            const projects = document.getElementById('projects')
                            projects.scrollIntoView({behavior: 'smooth', block: 'start'})
                        }
                    }
                    >PROYECTOS</button></li>
                </ul>
            </div>
            <div className='redes-sociales'>
                <a href="https://github.com/eliascando/" target="_blank" rel="noreferrer"><img height="30px" width="30px" src={github}/></a>
                <a href="https://linkedin.com/in/eliascando" target="_blank" rel="noreferrer"><img height="30px" width="30px" src={linkedin} /></a>
                <a href='https://www.instagram.com/cando.elias/' target="_blank" rel="noreferrer"><img height="30px" width="30px" src={instagram} /></a>
            </div>
        </div>
    )
}

export default Nav
