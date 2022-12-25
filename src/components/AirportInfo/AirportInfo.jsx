import React from "react";
import "./AirportInfo.css";

const AirportInfo = ({ text }) => {
  return (
    <div className="table center">
      <div className="monitor-wrapper center">
        <div className="monitor center">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default AirportInfo;
