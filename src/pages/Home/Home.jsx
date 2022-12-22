import React from "react";
import { Row, Col } from "antd";
import { Button } from "antd";
import Foto from "../../assets/images/foto.jpg";
import "./Home.css";

const Home = () => {
  return (
    <Row className="home-container">
      <Col className="photo" sm={24} md={12}>
        <div className="caca">
          <img src={Foto} alt="" />
        </div>
      </Col>
      <Col className="info" sm={24} md={12}>
        <h1 data-text="Hi," style={{ marginBottom: "0px" }}>
          Hi,
        </h1>
        <h1 data-text="I'm_Juan_Puerta">I'm_Juan_Puerta</h1>
        <h3>
          <span>A Software Engineer</span>
        </h3>
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
        <div className="div-button">
          <Button className="button-info" type="default" size="large" ghost>
            CHECK OUT MY WORK
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default Home;
