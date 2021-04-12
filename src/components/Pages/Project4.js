import React from 'react';
import Footer from '../Layout/Footer/Footer'
import FadeIn from 'react-fade-in'

import LinkIcon from '../../img/link.png'
import Mockup from './img/MockupLink.png'
import './project.css'

function Project4() {
    return (
        <div id="project">
            <FadeIn>
            <div className="container-project">
            <div className="head-separator">
                <a href="/">Regresar</a>
            </div>
                <a target="blank" href="https://github.com/miguelaf4/Linkhub" className="title">
                    <h1>Social Media Site using Django</h1>
                    <img src={LinkIcon} alt="Link Icon"/>
                </a>
                
                <p className="muted subtitle">Diseño de página</p>
                <p className="text">
                Como proyecto personal y para seguir con mi aprendizaje de Python con Django, decidí desarrollar una idea que llevaba un tiempo en mi cabeza. Recientemente se han puesto de modas plataformas para administrar múltiples links y colocarlo en redes sociales. El servicio más conocido de esto es Linktree. Sin embargo estos servicios cuentan con un diseño aburrido y pensé que no sería tan complicado implementar el mío. <br/><br/>
                Los requerimientos generales del proyecto era tener un template dinámico, el cual pudiera administrar desde una interfaz externa. Me di cuenta que Django sería ideal para este proyecto por su panel de administrador incluido y por la facilidad que tiene en convertir templates a sitios dinámicos. <br/><br/>
                Lo primero que hice para este proyecto fue desarrollar el diseño en Figma. Este diseño sería únicamente móvil, ya que es como espero que la mayoría de los usuarios consuman mi app. Aun así contemple diferentes tamaños sin alterar mucho el diseño. Ya con el diseño listo, me dedique a crear un template completamente responsivo y que tuviera la capacidad de contener múltiples tarjetas de links, sin romper el diseño.<br/><br/>
                Una ves que tenía listo mis recursos estáticos, lo siguiente fue crear el proyecto de Django y adaptar el template. Como todo proyecto de Django utilice la técnica de Modelo-Vista-Template para su implementación. Realmente la implementación fue muy sencilla, ya que solo necesitaba agregar un loop para cargar los datos de mi modelo de links. <br/><br/>
                La mayor dificultad de este proyecto fue hacer el deploy en Heroku, ya que Django no crea automáticamente un lugar para los archivos estáticos y tuve que probar diferentes soluciones hasta encontrar la definitiva. Sin embargo me hizo entender mejor como funciona Heroku y a la vez los archivos estáticos de Django.<br/><br/>
                El resultado final fue una solución sencilla pero eficiente a la problemática que me plantee. Me sirvió para seguir desarrollando mis habilidades con Django y entender mejor el funcionamiento de este.


                </p>
                <img src={Mockup} alt="Design Linktree Mockup" className="gallery-phone" />
            </div>
            </FadeIn>
           <Footer/>
        </div>
    )
}

export default Project4;