import React from "react";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Maincomponent1 from "../components/MainComponent1";
import Maincomponent2 from "../components/MainComponent2";

class ACSC00 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 1,
    };
  }
  render() {
    const { currentTab } = this.state;

    return (
      <div className="ACSC00">
        <div className="ACSC00__bg">
          <div className="ACSC00__bs__desc">
            <h2>맞춤형 교육 시스템</h2>
            <p>전국최초 학생맞춤 시스템</p>
            <p>네이스~~</p>
          </div>
          <div className="ACSC00__bg__arrow">
            <ArrowDownwardIcon />
          </div>
        </div>

        <div className="ACSC00__contents">
          <button
            className={
              currentTab === 1
                ? "ACSC00__contents__btn active"
                : "ACSC00__contents__btn"
            }
            onClick={() => this._changeTabHandler(1)}
          >
            NEWS
          </button>
          <button
            className={
              currentTab === 2
                ? "ACSC00__contents__btn active"
                : "ACSC00__contents__btn"
            }
            onClick={() => this._changeTabHandler(2)}
          >
            GALLERY
          </button>
        </div>
        <div className="ACSC00__desc">
          {currentTab === 1 ? <Maincomponent1 /> : null}
          {currentTab === 2 ? <Maincomponent2 /> : null}
        </div>
      </div>
    );
  }

  _changeTabHandler = (tab) => {
    this.setState({
      currentTab: tab,
    });
  };
}
export default ACSC00;
