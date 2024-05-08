import FrameComponent2 from "./FrameComponent2";
import "./FrameComponent1.css";
import react, { useState } from "react";
import Clinical from "../components/BioData/Clinical";
import Personal from "../components/BioData/Personal";

const FrameComponent1 = () => {
  const [personalClinical, setPersonalClinical] = useState("personal");

  return (
    <div
      className="joiner-parent"
      style={{ height: "100vh", overflow: "auto" }}
    >
      <div className="joiner">
        <div className="frame-parent3">
          <div className="frame-parent4">
            <div className="frame-wrapper2">
              <div className="felix-wandera-parent">
                <h3 className="felix-wandera">Felix Wandera</h3>
                <div className="id-20387-parent">
                  <div className="age-54-y-container">
                    <span>ID:</span>
                    <span className="span">{` `}</span>
                    <span className="y">20387</span>
                  </div>
                  <div className="age-54-y-container">
                    <span>Age:</span>
                    <span className="span"> 54</span>
                    <span className="y"> y</span>
                  </div>
                  <div className="gender-m">
                    <span className="gender-m-txt-container">
                      <span>Gender:</span>
                      <span className="span">{` `}</span>
                      <span className="y">M</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="facility-eqa-nairobi-container">
            <span>Facility:</span>
            <span className="span">{` `}</span>
            <span className="y">EQA NAIROBI WEST</span>
          </div>
        </div>
      </div>
      <div className="frame-wrapper3">
        <div className="frame-parent5">
          <div
            className="personal-wrapper"
            style={{ cursor: "pointer" }}
            onClick={() => setPersonalClinical("personal")}
          >
            <div className="personal">Personal</div>
          </div>
          <div
            className="clinical-wrapper"
            style={{ cursor: "pointer" }}
            onClick={() => setPersonalClinical("clinical")}
          >
            <div className="clinical">Clinical</div>
          </div>
        </div>
      </div>

      {personalClinical === "clinical" && <Clinical />}
      {personalClinical === "personal" && <Personal />}
    </div>
  );
};

export default FrameComponent1;
