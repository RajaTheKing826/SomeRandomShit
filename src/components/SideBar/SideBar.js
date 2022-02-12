import React from "react";
import "./index.css";

export const SideBar = (props) => {
  const { setSelectedView } = props;
  const onVerticalViewClick = () => {
    setSelectedView("card");
  };
  const onHorizontalViewClick = () => {
    setSelectedView("bar");
  };

  return (
    <div className="side-bar-container">
      <div className="profile-card-container">
        <img
          className="profile-pic"
          src="https://st.depositphotos.com/2101611/4338/v/600/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg"
          alt="profile-image"
        />
        <div>
          <p className="name-text">Hi Readers</p>
          <p>Here is your news</p>
        </div>
      </div>
      <div className="view-card-container">
        <p className="card-heading-text">View Toggle</p>
        <div className="icons-wrapper">
          <button className="left-button" onClick={onVerticalViewClick}>
            left
          </button>
          <button className="right-button" onClick={onHorizontalViewClick}>
            Right
          </button>
        </div>
      </div>
      <div className="view-card-container">
        <p className="card-heading-text">Have a feedback?</p>
        <button className="right-button">We are Listening!</button>
      </div>
    </div>
  );
};
