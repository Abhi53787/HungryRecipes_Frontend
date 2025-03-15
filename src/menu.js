import React from 'react';

import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';

function Menu() {
    //create the menu content using data-testid="menu-content"
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" data-testid="menu-content">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">ABC Automobiles</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Vehicles</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>
        
    );
}

export default Menu;