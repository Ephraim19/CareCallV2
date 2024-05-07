import { useMemo } from "react";
import "./FrameComponent1.css";

const FrameComponent1 = ({ propWidth }) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="frame-parent8" style={frameDivStyle}>
      <div className="frame-wrapper5">
        <div className="rectangle-parent9">
          <div className="frame-child17" />
          <div className="add-new">ADD NEW</div>
        </div>
      </div>
      <div className="interpretation">Interpretation</div>
    </div>
  );
};

export default FrameComponent1;
