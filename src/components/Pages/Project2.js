import React from 'react';
import Footer from '../Layout/Footer/Footer'
import FadeIn from 'react-fade-in'

import LinkIcon from '../../img/link.png'
import Mockup from './img/MockupKonter.png'
import './project.css'

function Project2() {
    return (
        <div id="project">
            <FadeIn>
            <div className="container-project">
            <div className="head-separator">
                <a href="/">Regresar</a>
            </div>
                <a target="blank" href="https://www.konter.com.mx/" className="title">
                    <h1>Konter Landing Page</h1>
                    <img src={LinkIcon} alt="Link Icon"/>
                </a>
                
                <p className="muted subtitle">Diseño de página + Implementación con GatsbyJS</p>
                <p className="text">
                Este proyecto fue el primer trabajo que me asignaron en Konter. Se trataba de realizar el rediseño total de la página web. Habían requerimientos muy específicos y la idea general era que se viera moderno y “fluido”. Basándome en algunos ejemplos que me dieron, llegué al diseño actual en donde se busca tener varios elementos interactivos y que al navegar sea como cambiar entre varias páginas. <br/><br/>
                Para la implementación colabore con otro desarrollador de la empresa y decidimos utilizar GatsbyJS por su alta velocidad y SEO, que eran parte de los requerimientos del proyecto. <br/><br/>
                Utilizamos un Starter de Gatsby, el cuál renovamos prácticamente completo, solo utilizando los paquetes ya instalados y la estructura del proyecto. <br/><br/>
                La página y el diseño pasaron por varias fases en las que se hicieron algunos cambios, se agregaron componentes y se priorizaron ciertas secciones. <br/><br/>
                El resultado final fue muy satisfactorio y lo consideró uno de mis mejores diseños webs. La mayor dificultad de este proyecto, sin duda, fueron los constantes cambios realizados, ya que se crearon algunos elementos que nunca fueron utilizados y algunos otros tuvieron que ser modificados múltiples veces. <br/><br/> 
                El proyecto nos tomó bastante tiempo, sin embargo, fue un buen ejercicio de trabajo en equipo y también tuve la oportunidad de trabajar con librerías de React que antes no conocía.

                </p>
                <img src={Mockup} alt="Design Konter" className="gallery"/>
            </div>
            </FadeIn>
           <Footer/>
        </div>
    )
}

export default Project2;
