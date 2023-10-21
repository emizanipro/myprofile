import React from 'react';
import "./AllProjects.css";
import { Link } from 'react-router-dom';
import NewProjects from '../NewProjects/NewProjects';

function AllProjects() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Esta propiedad habilita el desplazamiento suave
    });
  };

  return (
    <>
    <div className="title-card">
            <h3>Proyectos seleccionados</h3>
    </div>
    
    <div className="ProjectsContainer">
      <div className="Card" id="one">
      <Link to="/project-1" onClick={scrollToTop}> {/* Usa Link para enlazar a project-1 */}
            <h4>Deportes / Comercio Electrónico</h4>
            <h2>🥊 Ejercicio, Salud y Vitalidad</h2>
            <p>
              Explora nuestra pasión por el fitness, nuestros productos 
              en línea y el estilo de vida saludable para mejorar tu consciencia.
            </p>
            <img src="./assets/web-gym-1.jpeg" width="450px" height="300px" alt="Deportes / Comercio Electrónico"></img>
        </Link>
      </div>

      <div className="Card" id="two">
      <Link to="/project-2" onClick={scrollToTop}> {/* Usa Link para enlazar a project-2 */}
              <h4>Productos / Comercio Electrónico</h4>
              <h2>🧊 Venta de Productos de Hielo</h2>
              <p>
                Explora nuestra Página Web sobre productos de hielo en línea con integración de Mercado Pago.
              </p>
              <img src="./assets/web-ice-1.jpeg" width="450px" height="300px" alt="Productos / Comercio Electrónico"></img>
        </Link>
      </div>
    </div>

    <div className="title-card">
          <h3>Próximamente Nuevos Proyectos</h3>
    </div>

    <NewProjects />
  </>
  );
}

export default AllProjects;
