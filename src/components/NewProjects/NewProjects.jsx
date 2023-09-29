

function NewProjects() {
    return (

        <div className="ProjectsContainer">
    
            <div className="Card" id="new-one">     
                <a href="#">          
                    <h4>Sports / Ecommerce</h4>
                    <h2>🏋🏻 Exercise, Health, and Vitality</h2>
                    <p>
                        Explore our passion for fitness, our online products, and healthy living to enhance your well-being.
                    </p>
                    <img src="/src/components/img/web-gym-3.jpeg" width="450px" height="300px"></img>
                </a>
            </div>
    
            <div className="Card" id="new-two">     
                <a href="#">          
                    <h4>Plants / Ecommerce</h4>
                    <h2> 🌱 Seeds and Plants for Your Green World</h2>
                    <p>
                        our wide selection of plants, and gardening essentials to elevate your garden 
                        and surroundings.                  
                    </p>
                    <img src="/src/components/img//web-plant-1.jpeg" width="450px" height="300px" alt="Plant Nursery"></img>
                </a>
            </div>

        </div>
    
        
      );
};

export default NewProjects;