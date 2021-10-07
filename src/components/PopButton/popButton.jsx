import React from "react";
import PopUp from "../PopUp/popUp";
import "./popButton.css";

export default function PopButton() {
  const [openPop, setOpenPop] = React.useState(true);
  React.useEffect(()=>{
      setTimeout(()=>{
          setOpenPop(!openPop)
      },5000)
  },[openPop])

  let content = "";
  return (
    <div className="main-div">
      <button className="pop-button">
        Register
      </button>
      {openPop ? <PopUp content={content}/> : null}
    </div>
  );
}
