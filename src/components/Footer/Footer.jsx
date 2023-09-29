import React from 'react';
import "./Footer.css";
import styled from "styled-components";

function Footer() {

  return (
    <div className="FooterContainer">

        <Footer-Container>
            <div className="footer-1">

                <h1>Write to me</h1>

                <div className="footer-list">
                    <ul>                    
                        <li>
                            <a href="https://github.com/emizanipro" target="_blank">
                                <img src="/src/components/img/github-1.png" width="60px" height="60px"></img>
                                <h6>Github</h6>
                                <p>github.com/emizanipro</p>
                            </a>
                        </li>

                        <li>
                                <a href="https://www.linkedin.com/in/emizanipro/" target="_blank">
                                <img src="/src/components/img/linkedin-1.png" width="60px" height="60px"></img>
                                <h6>Linkedin</h6>
                                <p>linkedin.com/in/emizanipro</p>
                            </a>
                        </li>
                    </ul> 
                </div>
                
                <div className="copyright">
                    <h5>COPYRIGHT © 2023 ALL RIGHTS RESERVED</h5>
                </div>

            </div>
            
        </Footer-Container>

    </div>
  );
}

export default Footer;

const FooterContainer = styled.div`
    
`;