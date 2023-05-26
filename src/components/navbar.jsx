import React from "react";
import "../index.css"

function Navbar() {
    return (
        <nav className="nav__surface">
            <div className="nav">
            <a href="" className="brand"><img className="brand__logo" src="../img/navbar-logo.png"></img></a>
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
            <div className="nav__toggler">
                <div className="line1"></div>
                <div className="line1"></div>
                <div className="line1"></div>
            </div>
            </div>
        </nav>
    )
}

export default Navbar