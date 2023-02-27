import React from "react";
import "./skill.css";
import { ProgressBar } from "react-bootstrap";

export default function Card( {imageUrl, title, now} ) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="image" />
      </div>
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div>
        <ProgressBar animated now={now}/>
      </div>
    </div>
  );
}
