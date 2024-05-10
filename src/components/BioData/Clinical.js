import FrameComponent2 from "../FrameComponent2";
import "../FrameComponent1.css";
import React, { useState } from "react";

const FrameComponent1 = () => {
  return (
    <div >
      <div className="frame-wrapper4">
        <div className="frame-parent6">
          <div className="overview-parent">
            <div className="overview">Overview</div>
            <div className="frame-parent7">
              <div className="health-status-parent">
                <div className="health-status">HEALTH STATUS</div>
                <div className="healthy">Healthy</div>
              </div>
              <div className="health-status-parent">
                <div className="risk-score">RISK SCORE</div>
                <div className="div">83%</div>
              </div>
            </div>
            <div className="frame-parent8">
              <div className="health-status-parent">
                <div className="health-goals">HEALTH GOALS</div>
                <div className="dm-control">DM control</div>
              </div>
              <div className="health-status-parent">
                <div className="blood-group">Blood Group</div>
                <div className="a">A+</div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper5">
            <div className="edit-container">
              <div className="edit1">EDIT</div>
            </div>
          </div>
        </div>
      </div>
      <div className="exception-handler-wrapper" style={{marginBottom:"5%"}} >
        <div className="frame-parent9">
          <div className="conditions-parent">
            <div className="conditions">Conditions</div>
            <div className="condition-parent">
              <div className="condition">CONDITION</div>
              <div className="diabetes-mellitus-type">
                Diabetes mellitus type 2
              </div>
            </div>
            <div className="hypertension">{`Hypertension `}</div>
            <div className="hypertension">Tuberculosis</div>
          </div>
          <div className="frame-parent10">
            <div className="frame-parent11">
              <div className="edit-container">
                <div className="edit1">EDIT</div>
              </div>
              <div className="frame-wrapper7">
                <div className="health-status-parent">
                  <div className="status">STATUS</div>
                  <div className="active">Active</div>
                </div>
              </div>
            </div>
            <div className="condition-splitter">
              <div className="input-filter">
                <div className="active">Active</div>
                <div className="error-handler">
                  <div className="active">Resolved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="loop-processor" style={{marginBottom:"5%"}} >
        <div className="at-risk-of-parent">
          <div className="at-risk-of">At Risk of</div>
          <div className="condition-parent">
            <div className="condition">CONDITION</div>
            <div className="diabetes-mellitus-type">Colon cancer</div>
          </div>
          <div className="hypertension">{`Lung cancer `}</div>
          <div className="hypertension">{`Heart failure `}</div>
        </div>
        <div className="frame-parent12">
          <div className="edit-container">
            <div className="edit1">EDIT</div>
          </div>
          <div className="for-loop">
            <div className="while-loop">
              <div className="due-to-parent">
                <div className="due-to">DUE TO</div>
                <div className="family-history">Family history</div>
              </div>
              <div className="family-history">Heavy smoking</div>
              <div className="family-history">Severe HTN</div>
            </div>
          </div>
        </div>
      </div>
      <div className="exception-handler-wrapper" style={{marginBottom:"5%"}} >
        <div className="frame-parent13">
          <div className="frame-parent14">
            <div className="allergies-wrapper">
              <div className="allergies">Allergies</div>
            </div>
            <div className="due-to-parent">
              <div className="allergen">ALLERGEN</div>
              <div className="pollen">Pollen</div>
            </div>
            <div className="pollen">Nickel</div>
          </div>
          <div className="frame-wrapper9">
            <div className="frame-parent11">
              <div className="frame-wrapper10">
                <div className="edit-container">
                  <div className="edit1">EDIT</div>
                </div>
              </div>
              <div className="frame-parent16">
                <div className="due-to-parent">
                  <div className="reaction">REACTION</div>
                  <div className="family-history">Allergic asthma</div>
                </div>
                <div className="hypertension">Contact dermatitis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="transform-stage" style={{marginBottom:"5%"}} >
        <div className="frame-parent17">
          <FrameComponent2
            pastAdmissions="Past admissions"
            rEASONDIAGNOSIS="REASON/DIAGNOSIS"
          />
          <div className="frame-parent18">
            <div className="dec-2020-parent">
              <div className="dec-2020">Dec 2020</div>
              <div className="jan-2013-parent">
                <div className="jan-2013">Jan 2013</div>
              </div>
            </div>
            <div className="nested-loop">
              <div className="input-collector">
                <div className="anaphylaxis">
                  Hypergylcemic hyperosmolar state
                </div>
              </div>
              <div className="anaphylaxis">Pneumonia</div>
            </div>
          </div>
        </div>
      </div>
      <div className="exception-handler-wrapper">
        <div className="exception-handler">
          <FrameComponent2
            pastAdmissions="Previous Surgeries"
            rEASONDIAGNOSIS="SURGERY"
          />
          <div className="frame-parent19">
            <div className="may-2014-parent">
              <div className="may-2014">May 2014</div>
              <div className="jan-2013">Jan 2016</div>
            </div>
            <div className="frame-parent20">
              <div className="input-collector">
                <div className="hypergylcemic-hyperosmolar-sta">
                  Open heart surgery
                </div>
              </div>
              <div className="anaphylaxis">Thyroidectomy</div>
            </div>
          </div>
        </div>
      </div>
      <div className="transform-stage" style={{marginBottom:"5%"}}>
        <div className="reduce-stage">
          <div className="map-stage">
            <div className="family-history1">Family History</div>
            <div className="collect-stage">
              <div className="health-status-parent">
                <div className="relationship">RELATIONSHIP</div>
                <div className="father">Father</div>
              </div>
              <div className="father">Mother</div>
            </div>
            <div className="father">Sibling</div>
          </div>
          <div className="transformed-stage">
            <div className="collected-stage">
              <div className="edit-container">
                <div className="edit1">EDIT</div>
              </div>
            </div>
            <div className="logic-gate1">
              <div className="value-range">
                <div className="string-parser">
                  <div className="condition2">CONDITION</div>
                  <div className="diabetes-mellitus-type">Colon Cancer</div>
                </div>
              </div>
              <div className="type-2-diabetes">Type 2 diabetes</div>
              <div className="type-2-diabetes">Sickle cell disease</div>
            </div>
          </div>
        </div>
      </div>
      <div className="conditional-statement">
        <div className="input-field">
          <div className="other-notes">Other Notes</div>
          <div className="diabetes-mellitus-type">
            <ul className="write-other-notes-here">
              <li>Write other notes here</li>
            </ul>
          </div>
        </div>
        <div className="signal-processor">
          <div className="edit-container">
            <div className="edit1">EDIT</div>
          </div>
        </div>
      </div>
      {/* {personalClinical === "personal" ? <Clinical /> : "mm"}
      {personalClinical === "clinical" ? "ll" : "aa"} */}
    </div>
  );
};

export default FrameComponent1;
