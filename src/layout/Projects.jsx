import '../css/Projects.css'
import '../components/Pill.jsx'
import Pill from '../components/Pill.jsx';
import blogExpressHome from '../assets/blogExpressHome.jpeg'
import chatExpressHome from '../assets/chatExpressHome.jpeg'
import climaExpressHome from '../assets/climaExpressHome.png'
import botExpressHome from '../assets/botExpressHome.jpeg'
import github from '../assets/github.svg'

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
                <a href='https://wa.me/593988661001' target='_blank'>
                    <img src={botExpressHome} 
                        style={{ objectFit: 'cover'}}
                    />
                    <h1>
                        Bot Express
                        <a href='https://github.com/eliascando/BotExpress' target='_blank'>
                            <img 
                                src={github} 
                                style={{width: '40px', height: '40px', marginLeft: '20px' }}
                            ></img>
                        </a>
                    </h1>        
                    <p>Este es un proyecto de node que implementa las librerías de whatsapp-web.js, OpenAI y Mongoose para automatizar las respuestas de whatsapp
                    </p>
                    <Pill text="Node.js" />
                    <Pill text="MongoDB" />
                    <Pill text="OpenAI API" />
                    <Pill text="ChatBot" />
                </a>
            </article>
            <article>
                <a href='https://blog-express-sigma.vercel.app/' target='_blank'>
                    <img src={blogExpressHome} />
                    <h1>
                        Blog Express
                        <a href='https://github.com/eliascando/BlogExpress' target='_blank'>
                            <img 
                                src={github} 
                                style={{width: '40px', height: '40px', marginLeft: '20px' }}
                            ></img>
                        </a>
                    </h1>        
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
                    <h1>
                        Chat Express
                        <a href='https://github.com/eliascando/ChatExpress' target='_blank'>
                            <img 
                                src={github} 
                                style={{width: '40px', height: '40px', marginLeft: '20px' }}
                            ></img>
                        </a>
                    </h1>        
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
                    <h1>
                        Clima Express
                        <a href='https://github.com/eliascando/ClimaExpress' target='_blank'>
                            <img 
                                src={github} 
                                style={{width: '35px', height: '35px', marginLeft: '20px' }}
                            ></img>
                        </a>
                    </h1>        
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
