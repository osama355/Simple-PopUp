import React from "react";
import "./popUp.css";

export default function PopUp({ content}) {
  return (
    <div className="main-box">
      <div className="popup-box">
        <h1>Thank you</h1>
        {content}
      </div>
    </div>
  );
}
