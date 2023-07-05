import React from "react";
import "./style.css";
import SideBar from "../SideBar";

export default function Container({ children }) {
  return (
    <div id="bg">
      <SideBar />
      {children}
    </div>
  );
}
