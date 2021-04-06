import React from 'react';
import Footer from '../Layout/Footer/Footer'
import FadeIn from 'react-fade-in'

import LinkIcon from '../../img/link.png'
import Mockup from './img/MockupCESS.png'
import './project.css'

function Project3() {
    return (
        <div id="project">
            <FadeIn>
            <div className="container-project">
            <div className="head-separator">
                <a href="/">Regresar</a>
            </div>
                <a target="blank" href="https://miguelaf4.github.io/CessWebsite/" className="title">
                    <h1>Universidad CESS Redesign</h1>
                    <img src={LinkIcon} alt="Link Icon"/>
                </a>
                
                <p className="muted subtitle">Diseño de página</p>
                <p className="text">
                Este proyecto fue realizado para la Universidad CESS, en donde tuve mi primer trabajo. Para este proyecto tuve libertad total sobre tecnología y diseño. Hice la propuesta de actualizar la página web para que representará la evolución de la empresa ,donde a necesidad del COVID-19, se estaba modernizando con nuevas tecnologías. <br/> <br/>
                Este fue uno de mis primeros sitios que desarrolle. Como no tenía muchos conocimientos utilice un diseño minimalista y que siguiera un esquema sencillo. Al ser un sitio web para una universidad, contaba con múltiples páginas las cuales igual diseñe. <br/> <br/>
                Este fue mi primer proyecto “grande” y puedo decir que aprendí mucho en la creación de un diseño responsivo, conciso y limpio. Para lograr esto también me apoye de un paquete de ilustraciones que seguía la temática moderna y minimalista.<br/> <br/>
                Implemente una parte del sitio, sin embargo, por decisión de ambas partes, el proyecto no fue concluido y la implementación quedó incompleta.<br/> <br/>

                </p>
                <img src={Mockup} alt="Design CESS" className="gallery"/>
            </div>
            </FadeIn>
           <Footer/>
        </div>
    )
}

export default Project3;