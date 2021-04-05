import React from 'react';
import Banner from '../Sections/Banner/banner';
import Portfolio from '../Sections/Portafolio/Portafolio';
import Header from '../Layout/Header/Header';
import Contact from '../Sections/Contact/Contact';
import Footer from '../Layout/Footer/Footer'

const Home =()=> {
    return (
        <div id="home" >
            <Header/>
            <Banner/>
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;