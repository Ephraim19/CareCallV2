import React from "react";
import "./Vitals.css";
import FrameComponent1 from "./FrameComponent1";

const Vitals = () => {
  return (
    <div>
      <div className="iterative-processor">
        <div className="vitals-wrapper">
          <h3 className="vitals1">VITALS</h3>
        </div>
        <div className="iterative-processor-child">
          <div className="vector-group">
            <div className="graphical-view">Table view</div>
          </div>
        </div>
        <div className="iterative-processor-inner1">
          <div className="vector-container">
            <div className="minimize">Graphical</div>
          </div>
        </div>
      </div>

      {/* <div className="data-processor-inner">
        <div className="property-editor-parent">
          <div className="property-editor">
            <div className="property-editor-inner"> */}
      <div className="frame-parent4">
        <div className="blood-pressure-parent">
          <div className="blood-pressure">Blood Pressure</div>
          {/* <div className="frame-wrapper1">
            <div className="date-parent">
              <div className="date">Date</div>
              <div className="systolic-mmhg">Systolic (mmHg)</div>
            </div>
          </div> */}
        </div>
        {/* <div className="diastolic-mmhg-wrapper">
          <div className="diastolic-mmhg">Diastolic (mmHg)</div>
        </div>
        <FrameComponent1 /> */}
      </div>
      <div className="timer-manager" />
      {/* <div className="property-editor-child">
        <div className="condition-splitter-parent">
          <div className="condition-splitter">03/02/2020</div>
          <div className="nested-loop-wrapper">
            <div className="nested-loop">146</div>
          </div>
          <div className="function-caller-wrapper">
            <div className="function-caller">92</div>
          </div>
          <div className="stage-1-hypertension">Stage 1 Hypertension</div>
        </div>
      </div> */}

      <div className="property-editor-inner2">
        <div className="parent">
          <div className="div2">05/04/2022</div>
          <div className="wrapper">
            <div className="div3">133</div>
          </div>
          <div className="container">
            <div className="div4">81</div>
          </div>
          <div className="prehypertension">Prehypertension</div>
        </div>
        <div className="property-editor-inner1">
          <div className="line-div" />
        </div>
      </div>

      <div className="frame-parent4">
        <div className="blood-pressure-parent">
          <div className="blood-pressure">Temperature</div>
          {/* <div className="frame-wrapper1">
            <div className="date-parent">
              <div className="date">Date</div>
              <div className="systolic-mmhg">Systolic (mmHg)</div>
            </div>
          </div> */}
        </div>
        {/* <div className="diastolic-mmhg-wrapper">
          <div className="diastolic-mmhg">Diastolic (mmHg)</div>
        </div>
        <FrameComponent1 /> */}
      </div>
      <div className="timer-manager" />
      {/* <div className="property-editor-child">
        <div className="condition-splitter-parent">
          <div className="condition-splitter">03/02/2020</div>
          <div className="nested-loop-wrapper">
            <div className="nested-loop">146</div>
          </div>
          <div className="function-caller-wrapper">
            <div className="function-caller">92</div>
          </div>
          <div className="stage-1-hypertension">Stage 1 Hypertension</div>
        </div>
      </div> */}

      <div className="property-editor-inner2">
        <div className="parent">
          <div className="div2">05/04/2022</div>
          <div className="wrapper">
            <div className="div3">133</div>
          </div>
          <div className="container">
            <div className="div4">81</div>
          </div>
          <div className="prehypertension">Prehypertension</div>
        </div>
        <div className="property-editor-inner1">
          <div className="line-div" />
        </div>
      </div>
    </div>
  );
};

export default Vitals;
