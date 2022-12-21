import React, { useContext } from "react";
import uuid from "react-uuid";
import { Row, Col } from "antd";
import AppContext from "../../store/AppContext";
import CardProject from "../../components/CardProject/CardProject";
import "./Projects.css";

const Projects = () => {
  const state = useContext(AppContext);

  return (
    <Row
      className="container-projects"
      gutter={24}
      style={{ marginLeft: "0px", marginRight: "0px" }}
    >
      {state.info_pro.map((item) => (
        <Col xs={24} sm={24} md={12} lg={8} key={uuid()}>
          <CardProject
            title={item.title}
            description={item.description}
            link={item.link}
          />
        </Col>
      ))}
    </Row>
  );
};

export default Projects;
