import React, { useState } from "react";
import Modal from "react-modal";
import SideBar from "../SideBar";
import PostsComponent from "../PostsComponent";
import "./index.css";
export const HomePage = () => {
  const [selectedView, setSelectedView] = useState("bar");
  const [isOpen, setIsOpen] = useState(false);

  function onPostCardClick() {
    console.log("onPostCard Click");
    setIsOpen(!isOpen);
  }

  return (
    <div className="home-page-container">
      <SideBar setSelectedView={setSelectedView} />
      <PostsComponent
        onPostCardClick={onPostCardClick}
        selectedView={selectedView}
      />
      <Modal
        isOpen={isOpen}
        onRequestClose={onPostCardClick}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div>My modal dialog.</div>
      </Modal>
    </div>
  );
};
