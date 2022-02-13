import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import SideBar from "../SideBar";
import PostsComponent from "../PostsComponent";
import "./index.css";
export const HomePage = () => {
  const [selectedView, setSelectedView] = useState("bar");
  const [isOpen, setIsOpen] = useState(false);

  const onPostCardClick = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    return Modal.setAppElement("body");
  }, []);

  console.log(isOpen, "isOpen");
  return (
    <div className="home-page-container">
      <SideBar setSelectedView={setSelectedView} />
      <PostsComponent
        onPostCardClick={onPostCardClick}
        selectedView={selectedView}
      />
      <Modal
        isOpen={isOpen}
        onRequestClose={onCloseModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div>
          <iframe
            className="iframe-element"
            src="https://www.merriam-webster.com/dictionary/first"
          />
        </div>
      </Modal>
    </div>
  );
};
