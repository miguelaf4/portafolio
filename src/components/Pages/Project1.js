import React from 'react';
import Footer from '../Layout/Footer/Footer'
import FadeIn from 'react-fade-in'

import LinkIcon from '../../img/link.png'
import './project.css'

function Project1() {
    return (
        <div id="project">
            <FadeIn>
            <div className="container-project">
            <div className="head-separator">
                <a href="/">Regresar</a>
            </div>
                <a target="blank" href="https://labs.grupoindusa.com/" className="title">
                    <h1>Grupo Indusa Lab</h1>
                    <img src={LinkIcon} alt="Link Icon"/>
                </a>
                
                <p className="muted subtitle">Diseño de página interactiva</p>
                <p className="text">
                Este proyecto buscaba principalmente expandir la experiencia de usuario dentro del nuevo sitio web de Grupo Indusa, una carpintería de nivel industrial. En colaboración con el cliente llegamos a la idea de crear un “laboratorio” en donde los clientes puedan armar sus propios muebles. La propuesta incluía una versión para armar tu closet y otro para armar tu cocina. Las funciones principales sería tener una lista de elementos a elegir, diferentes opciones de colores y poder descargar la imagen al terminar el diseño. <br/><br/>
                Para este proyecto decidí elegir tecnologías sencillas y ligeras que no complicaran mucho el proyecto y permitan su implementación en un servidor compartido de bajo nivel. Utilice herramientas “vanilla”: HTML, CSS y JavaScript. Como fue acordado, el proyecto sería solamente front-end, por lo que no necesitamos ninguna base de datos. <br/><br/>
                Empecé con  el diseño en Figma. Decidí un layout partido en dos, utilizando principalmente tres colores y un diseño minimalista que vaya acuerdo a la página principal. Después de llegar a un acuerdo con el cliente sobre el diseño, proseguí a hacer la maquetación en HTML. <br/>

                </p>
            </div>
            </FadeIn>
           <Footer/>
        </div>
    )
}

export default Project1;
