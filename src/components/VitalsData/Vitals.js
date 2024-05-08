import React from "react";
import "./Vitals.css";
import FrameComponent1 from "./FrameComponent1";
import VITALSGRAPHICALREPRESENTAT from "./VITALSGRAPHICALREPRESENTAT";
import TemperatureGraph from "./TemperatureGraph";
import OxygenGraph from "./OxygenGraph";
import PulseRateGraph from "./PulseRateGraph";
import RespiratoryRate from "./RespiratoryRate";

const Vitals = () => {
  const [table, setTable] = React.useState("table");
  return (
    <div>
      <div className="iterative-processor">
        <div className="vitals-wrapper">
          <h3 className="vitals1">VITALS</h3>
        </div>
        <div className="iterative-processor-child">
          <div className="vector-group">
            <div onClick={() => setTable("table")} className="graphical-view">
              Table view
            </div>
          </div>
        </div>
        <div className="iterative-processor-inner1">
          <div className="vector-container">
            <div onClick={() => setTable("graphical")} className="minimize">
              Graphical
            </div>
          </div>
        </div>
      </div>

      {table === "table" && (
        <div>
          <div className="frame-parent4">
            <div className="blood-pressure-parent">
              <div className="blood-pressure">Blood Pressure</div>
            </div>
          </div>
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
          <div className="timer-manager" />

          <div className="frame-parent4">
            <div className="blood-pressure-parent">
              <div className="blood-pressure">Temperature</div>
            </div>
          </div>

          <div className="property-editor-inner2">
            <div className="parent">
              <div className="div2">03/02/2022</div>
              <div className="wrapper">
                <div className="div3">97</div>
              </div>
              <div className="container">
                <div className="div4">Normal</div>
              </div>
              <div className="prehypertension">Prehypertension</div>
            </div>
            <div className="property-editor-inner1">
              <div className="line-div" />
            </div>
          </div>
        </div>
      )}
      <div className="timer-manager" />
      {table === "graphical" && (
        <div>
          <div style={{ marginBottom: "7%" }}>
            <VITALSGRAPHICALREPRESENTAT />
          </div>
          <div style={{ marginBottom: "7%" }}>
            <TemperatureGraph />
          </div>
          <div style={{ marginBottom: "7%" }}>
            <OxygenGraph />
          </div>
          <div style={{ marginBottom: "7%" }}>
            <PulseRateGraph />
          </div>
          <div style={{ marginBottom: "7%" }}>
            <RespiratoryRate />
          </div>
        </div>
      )}
    </div>
  );
};

export default Vitals;
