import React from "react";
import avasoft from "../../images/avasoft.webp";
import './resume1.css';

const Resumecard = ({image, role, desc, tools, date}) => {
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
        <div>
          <p>{desc}</p>
        </div>
        <div>
          <p>{tools}</p>
        </div>
      </div>
    </div>
  );
}

export default Resumecard;
