import React from "react";
import "../index.css"

const CardExperiencia = (props) => {
    return (
            <div className="card__experiencia">
                <h2>{ props.empresa }</h2>
                <h4>{ props.fecha }</h4>
                <h3>{ props.puesto }</h3>
                <p>{ props.descripcion }</p>
            </div>
    );
};

export default CardExperiencia;