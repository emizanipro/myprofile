import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import "./Seccion2.css";

function Seccion2() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Esta propiedad habilita el desplazamiento suave
    });
  };

  return (
    <div className="SecProject">
      <div className="project-title">
        <h3>Mis Proyectos Actuales</h3>
      </div>

      <div className="project-container">
        <Link to="/project-1" onClick={scrollToTop}> {/* Usa Link para enlazar a project-1 */}
          <div className="project-1">
              <br></br>
              <h4>Deportes / Comercio Electrónico</h4>
              <h2>Ejercicio, Salud y Vitalidad</h2>
              <p>
                Explora nuestra pasión por el fitness, nuestros productos 
                en línea y el estilo de vida saludable para 
                mejorar tu bienestar en general y calidad de vida.
              </p>
            <img src="./assets/web-gym-1.jpeg" alt="Project 1 / Deportes / Comercio Electrónico" />
          </div>
        </Link>

        <Link to="/project-2" onClick={scrollToTop}> {/* Usa Link para enlazar a project-2 */}
          <div className="project-2">
                <br></br>
                <h4>Productos / Tienda en Línea</h4>
                <h2>Compras en Línea</h2>
                <p>
                  Descubre nuestra tienda en línea de productos 
                  de hielo, diseñada para ofrecer una experiencia de 
                  compra conveniente a través de MercadoPago.
                </p>
            <img src="./assets/web-ice-1.jpeg" alt="Project 2 / Productos / Tienda en Línea" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Seccion2;
