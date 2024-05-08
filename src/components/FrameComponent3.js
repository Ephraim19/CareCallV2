import "./FrameComponent3.css";
import { FaBars, FaSearch } from "react-icons/fa";

const FrameComponent3 = () => {
  return (
    <header className="conditional-branch">
      <div className="frame-container">
        <div className="navigation-svgrepocom-wrapper">
          <FaBars className="navigation-svgrepocom-icon"/>
        </div>
        {/* <div className="carecall-logo-parent"> */}
          <div className="logic-gate">
            <div className="carecall-parent">
              <h2 className="carecall">
                <span>Care</span>
                <span className="call">Call</span>
              </h2>
              <div className="connected-continuous-care-wrapper">
                <b className="connected-continuous-care">
                  Connected. Continuous. Care
                </b>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
      <div className="conditional-branch-inner">
        <div className="frame-div">
          <div className="vector-wrapper">
            <FaSearch className="vector-icon" />
          </div>
          <input
            className="search-by-patient"
            placeholder="Name, Phone or CareCall ID "
            type="text"
          />
        </div>
      </div>
      <div className="conditional-branch-child">
        <button className="view-all-members-wrapper">
          <div className="view-all-members">Members</div>
        </button>
      </div>
      <div className="conditional-branch-child">
        <button className="view-all-members-wrapper">
          <div className="view-all-members">New Member</div>
        </button>
      </div>
      <div className="conditional-branch-inner1">
        <div className="frame-parent1">
          <img
            className="profile-circle-svgrepocom-icon"
            loading="lazy"
            alt=""
            src="/profilecircle-svgrepocom.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default FrameComponent3;
