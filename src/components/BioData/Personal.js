import React from "react";
// import FrameProgram from "./PersonalFolder/FrameProgram";
import "./HOMEPAGE.css";

const Personal = () => {
  return (
    <div>
      <div className="frame-wrapper4">
        <div className="frame-parent1">
          <div className="program-status-assignees-parent">
            <h3 className="program-status">{`Program, Status & Assignees`}</h3>
            <div className="frame-parent2">
              <div className="program-parent">
                <div className="program">PROGRAM</div>
                <div className="status">STATUS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
