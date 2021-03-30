import React from "react";
import "./styles.css";

const Card = ({ item }) => {
  return (
    <div className="Card">
      <div className="Card__name">
        <h2>{item.nombre}</h2>
      </div>
      <div className="Card__job">
        <h3>{item.puesto}</h3>
      </div>
      <div className="Card__experience">
        <span>{item.experiencia} años de experiencia </span>
        <p>{item.preparatoria ? "Preparatoria" : "Secundaria"}</p>
      </div>
    </div>
  );
};

export default Card;
