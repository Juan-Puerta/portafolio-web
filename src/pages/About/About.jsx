import React from "react";
import { Row, Col } from "antd";
import { Progress } from "antd";
import ListCard from "../../components/ListCard/ListCard";
import AirportInfo from "../../components/AirportInfo/AirportInfo";
import "./About.css";

const About = () => {
  return (
    <Row className="about-container">
      <Col className="description" sm={24} md={12}>
        <ListCard />
      </Col>
      <Col className="statics" sm={24} md={12}>
        <AirportInfo text="Front-End" />
        <Progress percent={60} strokeColor={"#ffd700"} trailColor={"#f7f2d7"} />
        <div className="clear" />
        <AirportInfo text="Back-End" />
        <Progress percent={65} strokeColor={"#ffd700"} trailColor={"#f7f2d7"} />
        <div className="clear" />
        <AirportInfo text="Cloud computing" />
        <Progress percent={30} strokeColor={"#ffd700"} trailColor={"#f7f2d7"} />
        <div className="clear" />
        <AirportInfo text="Data Science & Machine Learning" />
        <Progress percent={50} strokeColor={"#ffd700"} trailColor={"#f7f2d7"} />
      </Col>
    </Row>
  );
};

export default About;
