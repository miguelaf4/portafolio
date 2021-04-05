import React, { useState, useEffect } from 'react';
import './style.css';
import {Link} from 'react-scroll'

import BigCircle from '../../../img/circle-big.png';
import SmCircle from '../../../img/circle-sm.png';
import FadeIn from 'react-fade-in'


function Banner() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <FadeIn>
            <div className="container-banner">
                <div id="bg-left">
                    <img className="big-circle" src={BigCircle} alt="Circle with gradient"  style={{ transform: `translateY(${offsetY * 0.9}px)` }}/>
                    <img className="sm-circle" src={SmCircle} alt="Circle with gradient" style={{ transform: `translateY(${offsetY * 0.6}px)` }}/>
                </div>
                <div id="bg-right">
                    <img className="big-circle" src={BigCircle} alt="Circle with gradient" style={{ transform: `translateY(${offsetY * 0.8}px)` }}/>
                    <img  className="sm-circle" src={SmCircle} alt="Circle with gradient" style={{ transform: `translateY(${offsetY * 0.6}px)` }}/>
                </div>
                <h1>Miguel Arrañaga.</h1>
                <h1>Frontend Developer.</h1>
                
                <p className="muted">Based in Mérida, Yucatán.</p>
                <div className="buttons-row">
                    
                    <Link smooth={true} duration={800} to="contact">
                        <a className="btn btn-primary" href="#">Contacto</a>
                    </Link>
                    <a className="btn" href="/curriculum">Ver Curriculum</a>
                </div>
            
            </div>
        </FadeIn>
        
    )
}

export default Banner
