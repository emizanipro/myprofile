import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Navbar from './components/Navbar/Navbar.jsx';
import FooterContainer from './components/Footer/Footer.jsx';
import AboutContainer from './components/About/About.jsx';
import ProjecContainer from './components/Project1/Project1.jsx';
import ProjecContainer2 from './components/Project2/Project2.jsx';
import AllProjects from './components/AllProjects/AllProjects.jsx';
import NewProjects from './components/NewProjects/NewProjects.jsx';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
        <div className="title-card">
            <h3>Selected Projects</h3>
        </div>
        <AllProjects/>

        <div className="title-card">
            <h3>Coming Soon</h3>
        </div>
        <NewProjects/>
        <FooterContainer/>
    </div>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
