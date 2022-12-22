import React from "react";
import { Row, Col } from "antd";
import { Progress } from "antd";
import ListCard from "../../components/ListCard/ListCard";
import "./About.css";

const About = () => {
  return (
    <Row className="about-container">
      <Col className="description" sm={24} md={12}>
        <ListCard />
      </Col>
      <Col className="statics" sm={24} md={12}>
        <h2>Front-End</h2>
        <Progress percent={60} strokeColor={"#ffd700"} trailColor={"#f7f2d7"} />
        <p />
        <h2>Back-End</h2>
        <Progress percent={65} strokeColor={"#ffd700"} trailColor={"#f7f2d7"} />
        <p />
        <h2>Cloud computing</h2>
        <Progress percent={30} strokeColor={"#ffd700"} trailColor={"#f7f2d7"} />
        <p />
        <h2>Data Science & Machine Learning</h2>
        <Progress percent={50} strokeColor={"#ffd700"} trailColor={"#f7f2d7"} />
      </Col>
    </Row>
  );
};

export default About;
