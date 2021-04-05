import React from 'react'
import './style.css'
import {Link} from 'react-scroll'

const Header = () => {
    return (
        <nav class="container-header">
                <div className="header">
                    <Link activeClass="active" className="capsule" to="portfolio" spy={true} smooth={true} duration={500}>Portafolio</Link>
                    <Link activeClass="active" className="capsule" to="contact" spy={true} smooth={true} duration={500}>Contacto</Link>
                    <Link activeClass="active" className="capsule" to="#">Blog</Link>
                </div>
        </nav>
    )
}

export default Header