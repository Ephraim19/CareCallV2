import "./AlignmentOptions.css";

const AlignmentOptions = () => {
  return (
    <div className="alignment-options">
      <div className="a-p-i-adapter">
        <h3 className="nutrition-blood">{`NUTRITION & BLOOD SUGAR`}</h3>
        <h3 className="database-developer">+</h3>
      </div>
      <div className="a-p-i-adapter">
        <h3 className="nutrition-blood">LAB FINDINGS</h3>
        <h3 className="database-developer">+</h3>
      </div>
      <div className="path-trimming">
        <div className="a-p-i-adapter">
          <h3 className="nutrition-blood">IMAGING</h3>
          <h3 className="database-developer">+</h3>
        </div>
        <div className="data-transformer-group">
          <div className="a-p-i-adapter">
            <h3 className="nutrition-blood">ATTACHMENTS</h3>
            <h3 className="database-developer">+</h3>
          </div>
          <div className="a-p-i-adapter">
            <h3 className="nutrition-blood">CLINICAL NOTES</h3>
            <h3 className="database-developer">+</h3>
          </div>
          <div className="a-p-i-adapter">
            <h3 className="nutrition-blood">INTERVENTIONS</h3>
            <h3 className="database-developer">+</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlignmentOptions;
