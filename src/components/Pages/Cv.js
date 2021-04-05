import React from 'react';
import curriculum from '../../img/CV.png';
import './project.css';
import FadeIn from 'react-fade-in';

const Cv = () => {
    return (
        <div className="container-cv">
            <div className="head-separator">
                    <a href="/">Regresar</a>
                    <a href="/MiguelArrañaga-CV.pdf" className="btn-cv" download>Descargar</a>
                </div>
            <FadeIn>
                <img src={curriculum} alt="Miguel Arrañaga CV"/>
            </FadeIn>  
        </div>
    )
}

export default Cv
