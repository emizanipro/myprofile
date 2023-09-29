<<<<<<< HEAD
import React from 'react';
import styled from "styled-components";
import "./BurguerButton.css";

function BurgerButton(props) {
  return (
        <Burguer>
            <div onClick={props.handleClick} 
            className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>             
            </div>
            
        </Burguer>
  );
}

export default BurgerButton;

const Burguer = styled.div`
    
=======
import React from 'react';
import styled from "styled-components";
import "./BurguerButton.css";

function BurgerButton(props) {
  return (
        <Burguer>
            <div onClick={props.handleClick} 
            className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>             
            </div>
            
        </Burguer>
  );
}

export default BurgerButton;

const Burguer = styled.div`
    
>>>>>>> 3adc0bf91cf645e18809c4f4423a93c3205ce0aa
`;