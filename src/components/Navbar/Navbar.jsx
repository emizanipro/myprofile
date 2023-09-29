import React, {useState} from 'react';
import styled from "styled-components";
import "./Navbar.css";
import BurgerButton from '../Burguer/BurguerButton';


function Navbar() {

  const [clicked, setClicked] = useState(false);
    

  const handleClick = () => {
        setClicked(!clicked);
    };

  return (
    <div className="NavContainer">

        <NavContainer>
            <div className="Nav-logo">
            <a href="http://localhost:5173/"><h2>Emiliano <span>Zani</span></h2></a>
                
            </div>

            <div className={`Nav-list ${clicked ? 'active' : ''}`} >
                <a href="http://localhost:5173/" className="home"><b>INICIO</b></a>                    
                <a href="about-me"><b>About Me</b></a>
                <a href="all-projects"><b>Projects</b></a>
                
                <div className="minifooter">                                   
                    <h1>LET'S TALK✌️</h1>
                    <ul>
                        <li>                          
                              <a href="https://github.com/emizanipro" target="_blank">
                              <img src="/src/components/img/github-1.png" width="60px" height="60px"></img>
                              <p>Github</p>             
                              </a>
                        </li>

                        <li>
                              <a href="https://www.linkedin.com/in/emizanipro/" target="_blank">
                              <img src="/src/components/img/linkedin-1.png" width="60px" height="60px"></img>
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
