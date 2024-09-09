import React from "react";
import "./resume1.css";
import Resumecard from "./Resumecard";
import Typical from "react-typical";
import avasoft from "../../images/avasoft.webp";
import trustrace from "../../images/trustrace.jpg";
import './resume1.css';

function Resume() {
  return (
    <>
      <div>
        <h1>
          <Typical loop={Infinity} steps={["Previous Work Experience", 1000]} />
        </h1>
        <div className="resume_maindiv">
          <Resumecard
            image={avasoft}
            role="Cloud Trainee Engineer"
            date="Feb - Sept 2024"
            desc="Description"
            tools="Tools"
          />
          <Resumecard
            image={trustrace}
            role="UI / UX designer"
            desc="Description"
            tools="Tools"
          />
        </div>
      </div>
    </>
  );
}

export default Resume;
