import React from 'react';
import { Link, Outlet } from 'react-router-dom';  // Import Outlet
import logo from '../assets/logo.png'; // Ensure you have a logo image in assets folder
import './Layout.css'; // Import CSS for styling

export default function Layout() {
  return (
    <div className="layout">
      {/* Header */}
      <header className="header">

        <div className="logo-container">
            <img src={logo} alt="Parineet Kaur Logo" className="logo" />
          </div>
        <h1 className="portfolio-title">My Portfolio</h1> 

        <hr className="header-divider" /> 
        <div className="header-top">
          <nav className="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/education">Education</Link></li>
              <li><Link to="/project">Projects</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>

                
      </header>

      {/* Main content (this will change based on the route) */}
      <main>
        <Outlet />   {/* ✅ This is where your page contents render */}
      </main>
    </div>
  );
}
