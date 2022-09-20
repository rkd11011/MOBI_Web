import React from "react";
import "./Main.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function Main() {
  return (
    <div className="Main_content">
      <Sidebar />
      <Feed />
    </div>
  );
}

export default Main;
