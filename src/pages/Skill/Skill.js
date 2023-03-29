import React from "react";
import Card from "./Card";
import Typical from "react-typical";
import "./skill.css";
import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import react from "../../images/react.png";
import mysql from "../../images/mysql.png";
import mongo from "../../images/mongo.png";
import node from "../../images/node.png";
import firebase from "../../images/firebase.png";
import c from "../../images/c.png";
import cpp from "../../images/c++.png";
import dsa from "../../images/dsa.png";

export default function Skill() {
  return (
    <div className="skill">
      {" "}
      <h1>
        {" "}
        <Typical loop={Infinity} steps={["Skill and Technologies", 1000]} />
      </h1>
      <div className="maindiv">
        <div className="container">
          <div>
            <p className="frontend">Programming skills</p>
          </div>
          <div className="skill-container">
            <div className="skill-list">
              <Card imageUrl={c} title="C" now={60} />
            </div>
            <div className="skill-list">
              <Card imageUrl={cpp} title="C++" />
            </div>
            <div className="skill-list">
              <Card imageUrl={dsa} title="Problem Solving" />
            </div>
          </div>
        </div>

        <div className="container">
          <div>
            <p className="frontend">Front-end skills</p>
          </div>
          <div className="skill-container">
            <div className="skill-list">
              <Card className="card" imageUrl={html} title="HTML" />
            </div>
            <div className="skill-list">
              <Card imageUrl={css} title="CSS" />
            </div>
            <div className="skill-list">
              <Card imageUrl={js} title="Javascript" />
            </div>
            <div className="skill-list">
              <Card imageUrl={react} title="React" />
            </div>
          </div>

        </div>
      </div>

      <div>
        <p className="backend">Back-end skills</p>
      </div>
      <div className="skill-container">
        <div className="skill-list">
          <Card imageUrl={mysql} title="MySql" />
        </div>
        <div className="skill-list">
          <Card imageUrl={mongo} title="Mongo DB" />
        </div>
        <div className="skill-list">
          <Card imageUrl={node} title="Node JS" />
        </div>
        <div className="skill-list">
          <Card imageUrl={firebase} title="Firebase" />
        </div>
      </div>
    </div>
  );
}

// return (
//   <div>
//     <div className="skill">
//       <h1>
//         Skills and Technologies
//       </h1>
//     </div>
//     <div className="skill-list">
//       <Card
//       imageUrl="https://camo.githubusercontent.com/edc736634dd35b0f4008e2f7db456136b9fc0e1e7a4078bb72c7352b1bdf8a7e/68747470733a2f2f776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6373732d332e737667"
//       title="HTML"/>
//     </div>
//   </div>
// );
