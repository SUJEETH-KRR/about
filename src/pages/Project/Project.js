import React, { Component } from "react";
import "./project.css";
import firebase from "../../images/firebase.png";
import flutter from "../../images/flutter.png";
import meet from "../../images/meet.png";
import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import expense from "../../images/expense.png";
import react from "../../images/react.png";
import search from "../../images/search.png";

import Typical from "react-typical";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import Carousel from "./Carousel";

export default class Project extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div>
        {" "}
        <h1
          style={{
            fontSize: "xx-larger",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: "orangered",
          }}
        >
          {" "}
          <Typical loop={Infinity} steps={["Projects", 1000]} />
        </h1>
        <Slider {...settings} className="Slider">
          <div>
            <div className="project-image">
              <img src={flutter}></img>
            </div>
            <div>
              <h3>Remainder Application</h3>
            </div>
            <div>
              <p>
                It is a mobile based application which is used as an TODO list,
                where users can manage their daily todos which are considered as
                important. Not only this application stores the data but also
                notify's them as a notification and as an remainder.
              </p>
              <div>
                <p>Implementation :</p>
                <div className="implement">
                  <img src={flutter} />
                  <p style={{ marginTop: "20px", fontSize: "50px" }}>+</p>
                  <img src={firebase} />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="project-image">
              <img src={meet}></img>
            </div>
            <div>
              <h3>Live Interaction meet</h3>
            </div>
            <div>
              <p>
                It is web based application which is intended for one to one
                virtual interaction. It was developed using HTML5, CSS3 and
                Javascript along with sockets
              </p>
              <div>
                <p>Implementation :</p>
                <div className="implement">
                  <img src={html} />
                  <p style={{ marginTop: "20px", fontSize: "50px" }}>+</p>
                  <img src={css} />
                  <p style={{ marginTop: "20px", fontSize: "50px" }}>+</p>
                  <img src={js} />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="project-image">
              <img
                src={expense}
                style={{ height: "200px", width: "400px" }}
              ></img>
            </div>
            <div style={{ marginTop: "auto", marginBottom: "auto" }}>
              <h3>Expense Tracker</h3>
            </div>
            <div>
              <p>
                It is a mobile based application which is used as an TODO list,
                where users can manage their daily todos which are considered as
                important. Not only this application stores the data but also
                notify's them as a notification and as an remainder.
              </p>
              <div>
                <p>Implementation :</p>
                <div className="implement">
                  <img src={react} />
                  <p style={{ marginTop: "20px", fontSize: "50px" }}>+</p>
                  <img src={css} />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="project-image">
              <img
                src={search}
                style={{ height: "250px", width: "400px" }}
              ></img>
            </div>
            <div>
              <h3>Search Engine</h3>
            </div>
            <div>
              <p>
                It is a mobile based application which is used as an TODO list,
                where users can manage their daily todos which are considered as
                important. Not only this application stores the data but also
                notify's them as a notification and as an remainder.
              </p>
              <div>
                <p>Implementation :</p>
                <div className="implement">
                  <img src={html} />
                  <p style={{ marginTop: "20px", fontSize: "50px" }}>+</p>
                  <img src={css} />
                  <p style={{ marginTop: "20px", fontSize: "50px" }}>+</p>
                  <img src={js} />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }

  // return (
  //   <div className="projects">
  //     {" "}
  //     <div>
  //       <h1
  //         style={{
  //           fontSize: "xx-larger",
  //           fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  //           color: "orangered",
  //         }}
  //       >
  //         {" "}
  //         <Typical loop={Infinity} steps={["Projects", 1000]} />
  //       </h1>
  //     </div>

  //   </div>
  // );
}
