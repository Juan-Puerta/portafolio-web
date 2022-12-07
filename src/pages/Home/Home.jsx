import React from "react";
import { Row, Col } from "antd";
import { Button } from "antd";
import { Image } from "antd";
import Foto from "../../assets/images/foto.jpg";
import "./Home.css";

const Home = () => {
  return (
    <Row className="home-container">
      <Col className="photo" sm={24} md={12}>
        <Image className="img-info" src={Foto} preview={false} />
      </Col>
      <Col className="info" sm={24} md={12}>
        <h1>Hi, I'm Juan Puerta</h1>
        <h3>A Software Engineer</h3>
        <br />
        <p>
          Software Engineer with interest in working in software development,
          web application programming, data analytics and artificial
          intelligence.
        </p>
        <p>
          I have experience in software development using programming languages
          such as: Python, Java, JavaScript, C#; Web application development
          using frameworks such as: React, Vue, Django, NodeJS; Management of
          agile methodologies such as: SCRUM and CRISP-DM; And finally, I have
          worked in data analytics and artificial intelligence projects using
          Python.
        </p>
        <p>
          I stand out for my responsibility, attention to detail, analysis and
          problem solving.
        </p>
        <br />
        <Button className="button-info" type="primary" size="large">
          CHECK OUT MY WORK
        </Button>
      </Col>
    </Row>
  );
};

export default Home;
