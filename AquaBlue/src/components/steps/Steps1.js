import React from "react";
//import "./Steps1.scss";
import Box_LineArt1 from "../../assets/images/Stage_a.png";

const steps1 = (props) => (
  <div className="howitworks-item">
    <div className="howitworks-container">
      <div className="image-area">
        <img src={Box_LineArt1} alt="box-lineart"></img>
      </div>
      <div className="spacer" />
      <div className="title-area">
        <div className="title-text">{props.title}</div>
        <div className="subtitle-text">{props.subtitle}</div>
      </div>
    </div>
  </div>
);

export default steps1;
