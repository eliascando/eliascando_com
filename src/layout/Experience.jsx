import '../css/Experience.css'
import  Pill  from '../components/Pill'

function Experience(props){

    const { setLocation } = props;

    return(
        <div 
            className="experience"
            onMouseOver={() => setLocation('experience')}
            id="experience"
        >
            <h1 className='active responsive'>EXPERIENCIA</h1>

            <section>
                <h2>Full-Stack Developer Jr.</h2>
                <p><strong>Corporación LANEC</strong></p>
                <p>jul. 2023 - actualidad</p>
                <p>
                    <Pill text="Azure DevOps" />
                    <Pill text="JavaScript" />
                    <Pill text="React.js" />
                    <Pill text="Transact-SQL" />
                    <Pill text="Git" />
                    <Pill text="Arquitectura de software" />
                </p>
            </section>
            <section>
                <h2>Ingeniería en Software</h2>
                <p><strong>Universidad de Guayaquil</strong></p>
                <p>jul. 2020 - actualidad</p>
                <p>
                    <Pill text="Angular" />
                    <Pill text="C#" />
                    <Pill text="SQL" />
                    <Pill text="Bases de Datos" />
                    <Pill text="Arquitectura de software" />
                    <Pill text="Testing" />
                    <Pill text="Metodologías de 
                    desarrollo de software" />
                    <Pill text="Desarrollo de API RESTFull" />
                </p>
            </section>
            <section>
                <h2>Universidad Angular</h2>
                <p><strong>Udemy</strong></p>
                <p>oct. - nov. 2023</p>
                <p>
                    <Pill text="Angular" />
                    <Pill text="Routing" />
                    <Pill text="Material Angular" />
                </p>
            </section>
            <section>
                <h2>Master en React</h2>
                <p><strong>Udemy</strong></p>
                <p>jun. - jul. 2023</p>
                <p>
                    <Pill text="MongoDB" />
                    <Pill text="Express.js" />
                    <Pill text="React.js" />
                    <Pill text="Node.js" />
                </p>
            </section>
            <section>
                <h2>Universidad Desarrollo Web</h2>
                <p><strong>Udemy</strong></p>
                <p>may. - jun. 2023</p>
                <p>
                    <Pill text="HTML" />
                    <Pill text="CSS" />
                    <Pill text="JavaScript" />
                </p>
            </section>
        </div>
    )
}

export default Experience