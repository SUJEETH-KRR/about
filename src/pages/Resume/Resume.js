import React from "react";
import "./resume1.css";
import Resumecard from "./Resumecard";
import Typical from "react-typical";
import avasoft from "../../images/avasoft.webp";
import trustrace from "../../images/trustrace.jpg";
import "./resume1.css";
import { FaAws, FaDocker, FaFigma } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si";

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
            desc="This experience includes 3 months of training and hands-on work with AWS and Azure services I have hands-on experience with AWS and Azure services, including setting up CI/CD pipelines for application deployment. I’ve also utilized Docker to containerize applications, improving their portability and consistency across environments."
            tools={[
              <FaDocker className="resume_icons" />,
              <FaAws className="resume_icons" />,
              <SiMicrosoftazure className="resume_icons" />,
            ]}
          />
          <Resumecard
            image={trustrace}
            role="UI / UX designer"
            date="June 2022"
            desc="As a UI/UX Designer, I have extensive experience in crafting user-centered design solutions for web and mobile applications. My role involved not only the full spectrum of UI/UX design tasks but also a strong focus on developing detailed wireframes to guide the design and development process."
            tools={[<FaFigma className="resume_icons" />]}
          />
        </div>
      </div>
    </>
  );
}

export default Resume;
