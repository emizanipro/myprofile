import "./About.css";


function About() {
  return (

    <div className="AboutContiner">

        <div className="About-1">
            <h4>A WEB DEVELOPER</h4>
            <h1>
                Full Stack Developer from Argentina. Passionate about 
                Creation of intuitive user interfaces and experiences.
            </h1>
        </div>

        <div className="About-2">
            <div className="About-info-1">
                    <h3>Language and Tools</h3>
                    <p>JavaScript</p>
                    <p>ReactJs</p>
                    <p>Node.Js</p>
                    <p>Sql</p>
                    <p>Css3</p>
            </div>

            <div className="About-info-2">
                    <h3>Interests</h3>
                    <p>User-friendly and attractive Website Design Systems.</p>
                    <p>Mobile Development (React Native).</p>
                    <p>Creative Animations.</p>
                    <p>E-commerce for Small and Medium-sized Enterprises (SMEs).</p>
            </div>

            <div className="About-info-3">
                    <h3>Pastime</h3>
                    <p>Create and collaborate on websites related to Sports and Health.</p>
                    <p>Projects</p>
            </div>
        </div>
        

    </div>
  );
}

export default About;
