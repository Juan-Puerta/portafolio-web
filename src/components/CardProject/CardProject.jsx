import React, { useState } from "react";
import { Button } from "antd";
import "./CardProject.css";

const CardProject = ({ title, description, link }) => {
  const [hoverActive, setHoverActive] = useState(false);

  return (
    <div
      className="contenedor-project"
      onMouseEnter={() => setHoverActive(true)}
      onMouseLeave={() => setHoverActive(false)}
    >
      {hoverActive ? (
        <div className="container-description">
          <div>{description}</div>
          <p />
          <Button ghost href={link}>
            See code
          </Button>
        </div>
      ) : (
        <div className="container-title">{title}</div>
      )}
    </div>
  );
};

export default CardProject;
