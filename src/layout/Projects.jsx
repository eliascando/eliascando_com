import '../css/Projects.css'
import '../components/Pill.jsx'
import Pill from '../components/Pill.jsx';
import blogExpressHome from '../assets/blogExpressHome.jpeg'
import chatExpressHome from '../assets/chatExpressHome.jpeg'
import climaExpressHome from '../assets/climaExpressHome.png'

function Projects(props){

    const { setLocation } = props;

    return(
        <div
            className="projects"
            onMouseOver={() => setLocation('projects')}
            id="projects"
        >
            <h1 className='active responsive'>PROYECTOS</h1>

            <article>
                <a href='https://blog-express-sigma.vercel.app/' target='_blank'>
                    <img src={blogExpressHome} />
                    <h1>Blog Express</h1>        
                    <p>Mi blog personal, donde comparto artículos sobre programación y desarrollo web,
                    desarrollado enteramente con el MERN Stack
                    </p>
                    <Pill text="JavaScript" />
                    <Pill text="React.js" />
                    <Pill text="Express.js" />
                    <Pill text="Node.js" />
                    <Pill text="MongoDB" />
                    <Pill text="API REST Full" />
                </a>
            </article>
            <article>
                <a href='https://chat-express-iota.vercel.app/' target='_blank'>
                    <img src={chatExpressHome} />
                    <h1>Chat Express</h1>        
                    <p>Aplicación Web de Chat en tiempo real con React y Node.js utilizando API REST Full y Socket.io. La aplicación se basa en la interacción entre usuarios, pudiendo enviarse mensajes en tiempo real y enviar solicitudes a otras personas.</p>
                    <Pill text="C#" />
                    <Pill text="React.js" />
                    <Pill text="Socket.io" />
                    <Pill text="Node.js" />
                    <Pill text="Microsoft SQL Server" />
                    <Pill text="API REST Full" />
                </a>
            </article>
            <article>
                <a href='https://clima-express.vercel.app/' target='_blank'>
                    <img src={climaExpressHome} />
                    <h1>Clima Express</h1>        
                    <p>La aplicacion para el clima! Clima Express es una aplicación web construida con React consume el API de WeatherApi y utiliza la libreria de Bootsrapp Icons para la parte gráfica de iconos.</p>
                    <Pill text="React.js" />
                    <Pill text="Bootstrap" />
                    <Pill text="API REST Full" />
                </a>
            </article>
        </div>
    )
}

export default Projects
