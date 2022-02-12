import React, { useState } from "react";
import SideBar from "../SideBar";
import PostsComponent from "../PostsComponent";
import "./index.css";
export const HomePage = () => {
  const [selectedView, setSelectedView] = useState("bar");
  return (
    <div className="home-page-container">
      <SideBar setSelectedView={setSelectedView} />
      <PostsComponent selectedView={selectedView} />
    </div>
  );
};
