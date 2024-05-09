import React from "react";
import "../VitalsData/Vitals.css";
import "./LabFindings.css";
const LabFindings = () => {
  const [table, setTable] = React.useState("table");
  return (
    <div>
      <div className="iterative-processor">
        <div className="vitals-wrapper">
          <h3 className="vitals1">Haemotology tests</h3>
        </div>

        <div className="iterative-processor-inner1">
          <div className="vector-container">
            <div onClick={() => setTable("graphical")} className="minimize">
              Collapse
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabFindings;
