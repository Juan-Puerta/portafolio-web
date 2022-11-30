import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  HomeFilled,
  PhoneFilled,
  IdcardFilled,
  LinkedinFilled,
  GithubFilled,
  YoutubeFilled,
  ProfileFilled,
  FolderFilled,
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
          <IdcardFilled />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="projects-link"
          to="/projects"
        >
          <FolderFilled />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="resume-link"
          to="/resume"
        >
          <ProfileFilled />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <PhoneFilled />
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
