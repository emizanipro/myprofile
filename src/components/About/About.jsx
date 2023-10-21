import React from 'react';
import "./About.css";


function About() {
  return (

    <div className="AboutContiner">

        <div className="About-1">
              <h4>DESARROLLO WEB</h4>
              <h1>
                  Desarrollador Full Stack de Argentina. Apasionado por l
                  a creación de interfaces y experiencias de usuario 
                  intuitivas.
              </h1>
        </div>

        <div className="About-2">
            <div className="About-info-1">
                    <h3>Language and Tools</h3>
                    <p>JavaScript</p>
                    <p>ReactJs</p>
                    <p>Node.Js</p>
                    <p>Sql</p>
                    <p>Css3</p>
            </div>

            <div className="About-info-2">
                  <h3>Intereses</h3>
                  <p>Sistemas de diseño web amigables y atractivos.</p>
                  <p>Desarrollo móvil (React Native).</p>
                  <p>Animaciones creativas.</p>
                  <p>Comercio electrónico para pequeñas y medianas empresas (PYMEs).</p>

            </div>

            <div className="About-info-3">
                  <h3>Pasatiempo</h3>
                  <p>Crear y colaborar en sitios web relacionados con Deportes y Salud.</p>
                  <p>Proyectos</p>
                  <p>Entrenar</p>
            </div>
        </div>
        

    </div>
  );
}

export default About;

