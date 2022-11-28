import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  HomeFilled,
  ContactsFilled,
  UserOutlined,
  LinkedinFilled,
  GithubFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import Logo from "../../assets/images/logo.png";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="Logo" />
        <div className="div-sub-logo">
          <h3 className="sub-logo">My Portfolio</h3>
        </div>
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <HomeFilled />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <UserOutlined />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <ContactsFilled />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/juan-s-puerta-97b849245/"
          >
            <LinkedinFilled />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Juan-Puerta"
          >
            <GithubFilled />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/channel/UCIjlw4ajZnRdsusjHstU6Xw"
          >
            <YoutubeFilled />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
