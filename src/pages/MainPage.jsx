import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="body-app">
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
