import React from 'react';
import "./Seccion1.css";

function Seccion1() {
  return (
    <div className="SecContainer">  
      <div className="img">
        <br></br>
        <br></br>
        <br></br>
        <h6>Perfil 2023</h6>
        <h1>Desarrollador Full Stack</h1>
        <h4>Diseño de Páginas Web a tu Gusto</h4>

      </div>

      <br></br>

      <div className="my-info">
        <div className="my-info-1">
            <h3>Hola. Soy Emiliano✌️</h3>
            <p>
              Me apasiona el desarrollo web, con un enfoque 
              especial en la creación de experiencias de usuario 
              intuitivas y dinámicas. Mi conjunto de herramientas
              principal incluye React y Node.js, que son esenciales
              para la entrega de proyectos web innovadores y efectivos.
            </p>
            <h4>Mis Habilidades Principales</h4>


          <div className="my-list">
            <ul>
              <li>
                <span>01</span>
                <br></br>
                <img src="/assets/react-1.png" width="60px" height="60px" alt="ReactJS"></img>
                <h4>REACTJS</h4> 
                <p>Biblioteca de interfaces</p>          
              </li>

              <li>
                <span>02</span>
                <br></br>
                <img src="./assets/nodejs-1.png" width="60px" height="60px" alt="Node.js"></img>
                <h4>NODE.JS</h4>
                <p>Entorno del servidor</p>         
              </li>

              <li>
                <span>03</span>
                <br></br>
                <img src="./assets/sql-1.png" width="60px" height="60px" alt="SQL"></img>
                <h4>SQL</h4>
                <p>Bases de Datos</p>           
              </li>

              <li>
                <span>04</span>
                <br></br>
                <img src="./assets/css-1.png" width="60px" height="60px" alt="CSS3"></img>
                <h4>CSS3</h4>
                <p>Diseños de Estilos Web</p>           
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seccion1;
