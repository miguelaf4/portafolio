import React from 'react'
import './style.css'


const Portafolio = () => {
    return (
        <div class="container-portfolio" id="portfolio">
            <h1>Portafolio</h1>
            <div className="portfolio-grid">
                
                <div className="project">
                    <a href="/portafolio/indusa-lab">
                        <h1>GRUPO INDUSA LABS</h1>
                    </a>
                </div>
            
            
                <div className="project">
                    <a href="/portafolio/socialmedia-django">
                        <h1>SOCIAL MEDIA SITE w/ DJANGO</h1>
                    </a>
                </div>
                
                <div className="project">
                    <a href="/portafolio/konter-website">
                        <h1>KONTER LANDING PAGE</h1>
                    </a>
                </div>
            
            
                <div className="project">
                    <a href="/portafolio/cess-redesign">
                        <h1>CESS REDESIGN</h1>
                    </a>
                </div>
            </div>
            <div class="btn-wrapper">
                 <a href="https://github.com/miguelaf4" target="_blank" rel="noreferrer" className="btn">Ver más</a>
            </div>
            
        </div>
    )
}

export default Portafolio
