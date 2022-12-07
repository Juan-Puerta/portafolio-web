import React from "react";
import { Card } from "antd";
import "./CardItem.css";

const CardItem = ({ title, description }) => {
  return (
    <Card className="the-card" title={title} size="small">
      <p>{description}</p>
    </Card>
  );
};

export default CardItem;
