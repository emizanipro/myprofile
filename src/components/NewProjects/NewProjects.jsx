import React from 'react';
import "./NewProjects.css";

function NewProjects() {
  return (
    <div className="ProjectsContainer">

      <div className="Card" id="new-one">    
            <h4>Deportes / Comercio Electrónico</h4>
            <h2>🏋🏻 Ejercicio, Salud y Vitalidad</h2>
            <p>
              Explora nuestra pasión por el fitness, nuestros productos en línea y el estilo de vida saludable para mejorar tu bienestar.
            </p>
          <img src="./assets/web-gym-3.jpeg" width="450px" height="300px" alt="Deportes / Comercio Electrónico"></img>         
      </div>

      <div className="Card" id="new-two">       
            <h4>Cannabis Medicinal / Tienda en Línea</h4>
          <h2>🌱 Cannabis Medicinal en Mendoza</h2>
          <p>
            Explora nuestra dedicación por el cannabis medicinal y nuestros productos 
            en línea para tu Bienestar.
          </p>
            <img src="./assets/cannabis-medicinal.webp" width="450px" height="300px" alt="Cannabis Medicinal / Tienda en Línea"></img>       
        </div>
    </div>
  );
}

export default NewProjects;
