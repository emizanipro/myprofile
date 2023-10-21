import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom';


import App from './App';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import FooterContainer from './components/Footer/Footer';
import AboutContainer from './components/About/About';
import ProjecContainer from './components/Project1/Project1';
import ProjecContainer2 from './components/Project2/Project2';
import AllProjects from './components/AllProjects/AllProjects';
import NewProjects from './components/NewProjects/NewProjects';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Project1 from './components/Project1/Project1';
import Project2 from './components/Project2/Project2';
import About from './components/About/About';

// Esta función te ayudará a mantener la ruta actual en sessionStorage.
function useSessionStorageRouting() {
  const navigate = useNavigate();

  useEffect(() => {
    const storedRoute = sessionStorage.getItem('storedRoute');
    if (storedRoute) {
      navigate(storedRoute);
    }
  }, [navigate]);
}

const router = createBrowserRouter([
  {
    path : "/",
    element: <App/>
  },
  {
    path : "/about-me",
    element : 
    <div>
        <Navbar/>
        <AboutContainer/>
        <FooterContainer/>
    </div>
  },
  {
    path : "/project-1",
    element : 
    <div>
        <Navbar/>
        <ProjecContainer/>
        <FooterContainer/>
    </div>
  },
  {
    path : "/project-2",
    element : 
    <div>
        <Navbar/>
        <ProjecContainer2/>
        <FooterContainer/>
    </div>
  },
  {
    path : "/all-projects",
    element : 
    <div>
        <Navbar/>  
        <AllProjects/>
        <NewProjects/>
        <FooterContainer/>
    </div>
  },
]);

// Utiliza la nueva API de React para renderizar la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/project-1" element={<Project1 />} />
          <Route path="/project-2" element={<Project2 />} />
          <Route path="/all-projects" element={<AllProjects />} />
        </Routes>
        
        <FooterContainer />
      </div>
    </Router>
  </React.StrictMode>
);





