import React from 'react';
import '../Main.css'

export default function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg " id="navbar">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Murtaza Neher Wala</a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"><i className="fas fa-bars" style={{color: "#fff"}}></i></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto" id="navbar-ul">
                    <li className="nav-item active">
                        <a className="nav-link" href="#home">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="project.html">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
  )
}
