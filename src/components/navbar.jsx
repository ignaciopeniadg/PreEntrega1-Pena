import React from "react";
import "../index.css"
import logo from '../img/navbar-logo.png'

function Navbar() {
    return (
        <nav className="nav">
            <a href="" className="brand"><img className="brand__logo" src= {logo}></img></a>
            <ul className="nav__menu">
                <li className="nav__item"><a href="" className="nav__link">Home</a></li>
                <li className="nav__item"><a href="" className="nav__link">Sobre mí</a></li>
                <li className="nav__item"><a href="" className="nav__link">Experiencia</a></li>
                <li className="nav__item"><a href="" className="nav__link">Estudios</a></li>
                <li className="nav__item"><a href="" className="nav__link">Skills</a></li>
                <li className="nav__item"><a href="" className="nav__link">Portfolio</a></li>
                <li className="nav__item"><a href="" className="nav__link">Servicios</a></li>
                <li className="nav__item"><a href="" className="nav__link">Contacto</a></li>
            </ul>
            <div>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}

export default Navbar