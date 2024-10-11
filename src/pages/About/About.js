import React from "react";
import "./about.css";
import MyResume from "../../documents/portfolio.pdf";
import sujeeth_img from "../../images/sujeeth.png";

export default function About() {
  return (
    <div className="contents">
      <div className="right-content">
        <img className="sujeeth_img" src={sujeeth_img} alt="sujeeth"></img>
      </div>
      <div className="left-content">
        <section id="home">
          <div class="main">
            <h1 class="headings" style={{color: "black"}}>
              I am
              <div id="name">SUJEETH G</div>
              <div id="content_me">
                {" "}
                <p style={{color: "#3C3D37"}}>
                Persistent, eagerly waiting to join as Software Developer to provide better solutions for implementing and developing applications along with my Technical and Designing skills.
                </p>
              </div>
              <div className="resume-link">
              <a href={MyResume} download="Resume">
                <button className="resume">Get Resume</button>
              </a>
            </div>
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
}
