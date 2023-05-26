import React from "react";
import "../index.css"
import logo from '../img/navbar-logo.png'

function Navbar() {
    return (
        <nav className="nav">
            <a href="" className="brand">
            <img className="brand__logo" src= {logo}></img></a>
            <ul className="nav__menu">
                <li className="nav__item">Home</li>
                <li className="nav__item">Sobre mí</li>
                <li className="nav__item">Experiencia</li>
                <li className="nav__item">Estudios</li>
                <li className="nav__item">Skills</li>
                <li className="nav__item">Portfolio</li>
                <li className="nav__item">Servicios</li>
                <li className="nav__item">Contacto</li>
            </ul>
        </nav>
    )
}

export default Navbar