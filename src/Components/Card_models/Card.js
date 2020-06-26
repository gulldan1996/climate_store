import React from "react";
import "./Card.scss";

const Card = ({ name, img, description, svg }) => {
  return (
    <div
      className="card-model"
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="card-model-svg">
        <img src={svg} alt={name} />
      </div>
    </div>
  );
};

export default Card;
