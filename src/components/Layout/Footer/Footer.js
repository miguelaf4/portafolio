import React from 'react';
import './style.css';
import ig from '../../../img/instagram.svg';
import tw from '../../../img/twitter.svg';
import gh from '../../../img/github.svg';
import li from '../../../img/linkedin.svg';

const Footer = () => {
    return (
        <div className="container-footer">
            <a href="mailto:miguelarraf@gmail.com" className="footer-mail">miguelarraf@gmail.com</a>
            <div className="sm-wrapper">
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/miguelarra/" className="icon"><img src={ig} alt="Instagram icon"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/miguelarraf" className="icon"><img src={tw} alt="Twiiter Icon"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/miguelaf4" className="icon"><img src={gh} alt="Github Icon"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/miguelarra/" className="icon"><img src={li} alt="Linkedin Icon"/></a>
            </div>
            <p>&copy; Copyright 2021 Miguel Arrañaga. </p>
        </div>
    )
}

export default Footer
