import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link, NavLink } from "react-router-dom";
import { message } from "antd";
import {
  HomeFilled,
  PhoneFilled,
  IdcardFilled,
  LinkedinFilled,
  GithubFilled,
  ProfileFilled,
  FolderFilled,
  MailFilled,
} from "@ant-design/icons";
import Logo from "../../assets/images/logo.png";
import "./Sidebar.css";

const Sidebar = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.info("Copied to clipboard");
  };

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
      </nav>
      <ul>
        <li>
          {contextHolder}
          <CopyToClipboard
            className="copy_nav"
            text="puertasebastianjuan@gmail.com"
          >
            <MailFilled onClick={info} />
          </CopyToClipboard>
        </li>
        <li>
          {contextHolder}
          <CopyToClipboard className="copy_nav" text="3146086847">
            <PhoneFilled onClick={info} />
          </CopyToClipboard>
        </li>
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
      </ul>
    </div>
  );
};

export default Sidebar;
