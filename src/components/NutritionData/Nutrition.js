import React from "react";
import "../VitalsData/Vitals.css"
import BloodSugarGraph from "./BloodSugarGraph";
import Hba1c from "./Hba1c";
import BMIGraph from "./BMIGraph";
import Weight from "./Weight";
import BodyFatGraph from "./BodyFatGraph";
// import MuscleMassGraph from "./NutritionData/MusceMassGraph";
import MuscleMassGraph from "./MuscleMassGraph";
import BoneMassGraph from "./BoneMassGraph";
import DCIGraph from "./DCIGraph";
import VisceralFatGraph from "./VisceralFatGraph";
import BodyWaterGraph from "./BodyWaterGraph";
import MetabolicAgeGraph from "./MetabolicAgeGraph";
const Nutrition = () => {
  const [table, setTable] = React.useState("table");
  return (
    <div>
      <div className="iterative-processor">
        <div className="vitals-wrapper">
          <h3 className="vitals1">NUTRITION</h3>
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
              <div className="blood-pressure">Random Blood Sugar</div>
            </div>
          </div>

          <div className="property-editor-inner2">
            <div className="date-parent">
              <div className="date">Date</div>
              <div className="diastolic-mmhg">RBS (mmol/L)</div>
              <div className="diastolic-mmhg">Interpretation</div>
            </div>
          </div>

          <div className="property-editor-inner1">
            <div className="line-div" />
          </div>

          <div className="property-editor-inner2">
            <div className="parent">
              <div className="div2">05/04/2022</div>
              <div className="wrapper">
                <div className="div3">133</div>
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
              <div className="blood-pressure">Fasting Blood Sugar</div>
            </div>
          </div>

          <div className="property-editor-inner2">
            <div className="date-parent">
              <div className="date">Date</div>
              <div className="diastolic-mmhg">FBS (mmol/L)</div>
              <div className="diastolic-mmhg">Interpretation</div>
            </div>
          </div>

          <div className="property-editor-inner1">
            <div className="line-div" />
          </div>

          <div className="property-editor-inner2">
            <div className="parent">
              <div className="div2">05/04/2022</div>
              <div className="wrapper">
                <div className="div3">133</div>
              </div>
              {/* <div className="container">
                <div className="div4">prehypertension</div>
              </div> */}
              <div className="prehypertension">Prehypertension</div>
            </div>
          </div>
          <div className="property-editor-inner1">
            <div className="line-div" />
          </div>

          <div className="frame-parent4">
            <div className="blood-pressure-parent">
              <div className="blood-pressure">Glycated Haemoglobin</div>
            </div>
          </div>

          <div className="property-editor-inner2">
            <div className="date-parent">
              <div className="date">Date</div>
              <div className="diastolic-mmhg">Hba1c (%)</div>
              <div className="diastolic-mmhg">Interpretation</div>
            </div>
          </div>

          <div className="property-editor-inner1">
            <div className="line-div" />
          </div>

          <div className="property-editor-inner2">
            <div className="parent">
              <div className="div2">05/04/2022</div>
              <div className="wrapper">
                <div className="div3">133</div>
              </div>
              {/* <div className="container">
                <div className="div4">prehypertension</div>
              </div> */}
              <div className="prehypertension">Prehypertension</div>
            </div>
          </div>

          <div className="property-editor-inner1">
            <div className="line-div" />
          </div>

          <div className="frame-parent4">
            <div className="blood-pressure-parent">
              <div className="blood-pressure">Body Mass Index </div>
            </div>
          </div>

          <div className="property-editor-inner2">
            <div className="date-parent">
              <div className="date">Date</div>
              <div className="diastolic-mmhg">BMI(kg/m^2) </div>
              <div className="diastolic-mmhg">Interpretation</div>
            </div>
          </div>

          <div className="property-editor-inner1">
            <div className="line-div" />
          </div>

          <div className="property-editor-inner2">
            <div className="parent">
              <div className="div2">05/04/2022</div>
              <div className="wrapper">
                <div className="div3">133</div>
              </div>
              {/* <div className="container">
                <div className="div4">prehypertension</div>
              </div> */}
              <div className="prehypertension">Prehypertension</div>
            </div>
          </div>

          <div className="property-editor-inner1">
            <div className="line-div" />
          </div>

          <div className="frame-parent4">
            <div className="blood-pressure-parent">
              <div className="blood-pressure">Body Composition Analysis </div>
            </div>
          </div>

          <div className="property-editor-inner2">
            <div className="date-parent">
              <div className="date">Date</div>
              <div className="diastolic-mmhg">Body fat (%) </div>
              <div className="diastolic-mmhg">Muscle mass</div>
              <div className="diastolic-mmhg">Bone mass</div>
              <div className="diastolic-mmhg">DCI</div>
              <div className="diastolic-mmhg">Body water</div>
              <div className="diastolic-mmhg">Body water</div>
              <div className="diastolic-mmhg">Visceral fat</div>
              <div className="diastolic-mmhg">Metabolic age</div>
            </div>
          </div>

          <div className="property-editor-inner1">
            <div className="line-div" />
          </div>

          <div className="property-editor-inner2">
            <div className="parent">
              <div className="div2">05/04/2022</div>
              <div className="wrapper">
                <div className="div3">--</div>
              </div>
              {/* <div className="container">
                <div className="div4">prehypertension</div>
              </div> */}
              <div className="prehypertension">--</div>
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
            <BloodSugarGraph />
          </div>
          <div style={{ marginBottom: "7%" }}>
            <Hba1c />
          </div>
          <div style={{ marginBottom: "7%" }}>
            <BMIGraph />
          </div>
          <div style={{ marginBottom: "7%" }}>
            <Weight />
          </div>
          <div style={{ marginBottom: "7%" }}>
            <BodyFatGraph />
          </div>
          <div style={{ marginBottom: "7%" }}>
            <MuscleMassGraph />
          </div>
          <div style={{ marginBottom: "7%" }}>
            <BoneMassGraph />
          </div>
          <div style={{ marginBottom: "7%" }}>
            <DCIGraph />
          </div>
          <div style={{ marginBottom: "7%" }}>
            <VisceralFatGraph />
          </div>
          <div style={{ marginBottom: "7%" }}>
            <BodyWaterGraph />
          </div>
          <div style={{ marginBottom: "7%" }}>
            <MetabolicAgeGraph />
          </div>
        </div>
      )}
    </div>
  );
};

export default Nutrition;
