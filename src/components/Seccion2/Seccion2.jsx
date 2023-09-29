import "./Seccion2.css";

function Seccion2() {
  return (
    <div className="SecProject">
      <div className="project-title">
        <h3>My Current Projects</h3>
      </div>

      <div className="project-container">
        <a href="project-1">
          <div className="project-1">
            <br></br>
            <h4>Sports / Ecommerce</h4>
            <h2>Exercise, Health, and Vitality</h2>
            <p>
              Explore our passion for fitness, our online products, and healthy living to enhance your well-being.
            </p>

            <img src="./src/components/img/web-gym-1.jpeg" alt="Project 1" />
          </div>
        </a>

        <a href="project-2">
          <div className="project-2">
            <br></br>
            <h4>Products / Online Store</h4>
            <h2>Compras en Línea</h2>
            <p>
              Discover our online store for ice products, designed to
              offer a convenient shopping experience through MercadoPago.
            </p>
            <img src="/src/components/img/web-ice-1.jpeg" alt="Project 2" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Seccion2;
