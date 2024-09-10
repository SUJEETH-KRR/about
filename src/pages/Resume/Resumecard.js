import React from "react";
import avasoft from "../../images/avasoft.webp";
import "./resume1.css";

const Resumecard = ({ image, role, desc, tools, date }) => {
  return (
    <div>
      <div className="resume_card-container">
        <div className="resume_image-container">
          <img src={image} alt="image" />
        </div>
        <div className="resume_card-title">
          <h3>{role}</h3>
          <h3>{date}</h3>
        </div>
        <div className="description">
          <p>{desc}</p>
        </div>
        <div>
          <p style={{fontWeight: "bolder"}}>Tools: </p>
          {tools}
        </div>
      </div>
    </div>
  );
};

export default Resumecard;
