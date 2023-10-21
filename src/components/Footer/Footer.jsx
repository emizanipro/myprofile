import React from 'react';
import "./Footer.css";


function Footer() {

  return (
    <div className="FooterContainer">

        <Footer-Container>
            <div className="footer-1">

                <h1>Escríbeme</h1>

                <div className="footer-list">
                    <ul>                    
                        <li>
                            <a href="https://github.com/emizanipro" target="_blank">
                                <img src="./assets/github-1.png" width="60px" height="60px"></img>
                                <h6>Github</h6>
                                <p>github.com/emizanipro</p>
                            </a>
                        </li>

                        <li>
                                <a href="https://www.linkedin.com/in/emizanipro/" target="_blank">
                                <img src="./assets/linkedin-1.png" width="60px" height="60px"></img>
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

