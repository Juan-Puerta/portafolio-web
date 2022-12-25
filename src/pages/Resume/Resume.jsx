import React from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import resume from "../../assets/documents/resume.pdf";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="div-resume">
      <Button
      className="botoncito"
        type="default"
        icon={<DownloadOutlined />}
        size="large"
        href={resume}
        download="Resume - Juan Puerta.pdf"
        ghost
      >
        Download CV
      </Button>
    </div>
  );
};

export default Resume;
