import { useMemo } from "react";
import "./Temperature.css";

const Temperature = ({
  temperature,
  readingDegreesCelcius,
  conditionChain,
  normothermia,
  prop,
  pyrexiafever,
  parallelProcessorPool,
  hypothermia,
  propPadding,
  propDisplay,
  propMinWidth,
  propWidth,
  propPadding1,
  propTextAlign,
  propDisplay1,
  propMinWidth1,
  propWidth1,
  propWidth2,
  propMinWidth2,
  propAlignSelf,
  propDisplay2,
  propMinWidth3,
  propColor,
  propWidth3,
  propMinWidth4,
  propColor1,
  propMinWidth5,
  propWidth4,
  propMinWidth6,
  propMinWidth7,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const temperatureStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const frameDiv2Style = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding1,
    };
  }, [propWidth, propPadding1]);

  const readingDegreesCelciusStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propTextAlign, propDisplay1, propMinWidth1]);

  const frameDiv3Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const frameDiv4Style = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const conditionChainStyle = useMemo(() => {
    return {
      minWidth: propMinWidth2,
      alignSelf: propAlignSelf,
    };
  }, [propMinWidth2, propAlignSelf]);

  const normothermiaStyle = useMemo(() => {
    return {
      display: propDisplay2,
      minWidth: propMinWidth3,
      color: propColor,
    };
  }, [propDisplay2, propMinWidth3, propColor]);

  const frameDiv5Style = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth4,
    };
  }, [propMinWidth4]);

  const pyrexiafeverStyle = useMemo(() => {
    return {
      color: propColor1,
      minWidth: propMinWidth5,
    };
  }, [propColor1, propMinWidth5]);

  const frameDiv6Style = useMemo(() => {
    return {
      width: propWidth4,
    };
  }, [propWidth4]);

  const parallelProcessorPoolStyle = useMemo(() => {
    return {
      minWidth: propMinWidth6,
    };
  }, [propMinWidth6]);

  const hypothermiaStyle = useMemo(() => {
    return {
      minWidth: propMinWidth7,
    };
  }, [propMinWidth7]);

  return (
    <div className="frame-parent9" style={frameDiv1Style}>
      <div className="divide-panel-parent">
        <div className="divide-panel">
          <div className="temperature" style={temperatureStyle}>
            {temperature}
          </div>
          <div className="date-container">
            <div className="date2">Date</div>
          </div>
        </div>
        <div className="reading-degrees-celcius-wrapper" style={frameDiv2Style}>
          <div
            className="reading-degrees-celcius"
            style={readingDegreesCelciusStyle}
          >
            {readingDegreesCelcius}
          </div>
        </div>
        <div className="frame-parent10">
          <div className="frame-wrapper6">
            <div className="rectangle-parent10">
              <div className="frame-child18" />
              <div className="add-new1">ADD NEW</div>
            </div>
          </div>
          <div className="interpretation1">Interpretation</div>
        </div>
      </div>
      <div className="data-splitter" />
      <div className="frame-wrapper7" style={frameDiv3Style}>
        <div className="data-transformer-container">
          <div className="data-transformer2">03/02/2020</div>
          <div className="condition-chain-wrapper" style={frameDiv4Style}>
            <div className="condition-chain" style={conditionChainStyle}>
              {conditionChain}
            </div>
          </div>
          <div className="normothermia" style={normothermiaStyle}>
            {normothermia}
          </div>
        </div>
      </div>
      <div className="data-flow-controller-wrapper">
        <div className="data-flow-controller" />
      </div>
      <div className="frame-wrapper8" style={frameDiv5Style}>
        <div className="control-flow-statement-parent">
          <div className="control-flow-statement">05/04/2022</div>
          <div className="wrapper2">
            <div className="div9" style={divStyle}>
              {prop}
            </div>
          </div>
          <div className="pyrexiafever" style={pyrexiafeverStyle}>
            {pyrexiafever}
          </div>
        </div>
      </div>
      <div className="frame-wrapper9">
        <div className="value-processor-chain-parent">
          <div className="value-processor-chain" />
          <div className="frame-wrapper10" style={frameDiv6Style}>
            <div className="input-validator-chain-parent">
              <div className="input-validator-chain">30/11/2024</div>
              <div className="parallel-processor-pool-wrapper">
                <div
                  className="parallel-processor-pool"
                  style={parallelProcessorPoolStyle}
                >
                  {parallelProcessorPool}
                </div>
              </div>
              <div className="hypothermia" style={hypothermiaStyle}>
                {hypothermia}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="data-gatherer-wrapper">
        <div className="data-gatherer" />
      </div>
    </div>
  );
};

export default Temperature;
