import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import "./Navbar.css";
import BurgerButton from '../Burguer/BurguerButton';

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const closeMenu = () => {
    setClicked(false); // Cierra el menú
  };


  

  return (
    <div className="NavContainer">
      <NavContainer>
        <div className="Nav-logo">
          <Link to="/" onClick={closeMenu}>
            <h2>Emiliano <span>Zani</span></h2>
          </Link>
        </div>

        <div className={`Nav-list ${clicked ? 'active' : ''}`}>
          <Link to="/" className="home" onClick={closeMenu}><b>Inicio</b></Link>
          <Link to="/about-me" onClick={closeMenu}><b>Sobre Mi</b></Link>
          <Link to="/all-projects" onClick={closeMenu}><b>Proyectos</b></Link>

          <div className="minifooter">
            <h1>LET'S TALK✌️</h1>
            <ul>
              <li>
                <a href="https://github.com/emizanipro" target="_blank" rel="noopener noreferrer">
                  <img src="./assets/github-1.png" width="60px" height="60px" alt="GitHub"></img>
                  <p>Github</p>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/emizanipro/" target="_blank" rel="noopener noreferrer">
                  <img src="./assets/linkedin-1.png" width="60px" height="60px" alt="LinkedIn"></img>
                  <p>Linkedin</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="burguer-menu">
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>

        <Bgdiv className={`initial ${clicked ? 'active' : ''}`}></Bgdiv>
      </NavContainer>
    </div>
  );
}

export default Navbar;

const NavContainer = styled.nav`
`;

const Bgdiv = styled.div`
`;
