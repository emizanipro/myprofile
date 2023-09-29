import "./Seccion1.css";




function Seccion1() {

    

  return (
    <div className="SecContainer">  
             <div className="img">
                <br></br>
                <br></br>
                <br></br>
                <h6>Profile 2023</h6>
                <h1>Full Stack Developer</h1>
                <h4>Web Page Design to Your Liking</h4>
                        
             </div>       
    
            <br></br>

            <div className="my-info">
                <div className="my-info-1">
                    <h3>Hello. I'm Emiliano✌️</h3>
                    <p>
                        I'm passionate about web development, with a
                        special focus on creating intuitive and dynamic
                        user experiences. My core toolkit includes React and Node.js,
                        which are essential for delivering innovative and effective web projects.
                    </p>
                    <h4>My Main Skills</h4>


                    <div className="my-list">
                        <ul>
                            <li>
                                <span>01</span>
                                <br></br>
                                <img src="/src/components/img/react-1.png" width="60px" height="60px"></img>
                                <h4>REACTJS</h4> 
                                <p>Library of Interfaces</p>          
                            </li>

                            <li>
                                <span>02</span>
                                <br></br>
                                <img src="/src/components/img/nodejs-1.png" width="60px" height="60px"></img>
                                <h4>NODE.JS</h4>
                                <p>Server Environment</p>         
                            </li>
                            
                            <li>
                                <span>03</span>
                                <br></br>
                                <img src="/src/components/img/sql-1.png" width="60px" height="60px"></img>
                                <h4>SQL</h4>
                                <p>Database Management</p>           
                            </li>

                            <li>
                                <span>04</span>
                                <br></br>
                                <img src="/src/components/img/css-1.png" width="60px" height="60px"></img>
                                <h4>CSS3</h4>
                                <p>Style Design</p>           
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        
    </div>
  );
}

export default Seccion1;

