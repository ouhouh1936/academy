import React from "react";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

class ACSC00 extends React.Component {
  render() {
    return (
      <div className="ACSC00">
        <div className="ACSC00__bg">
          <div className="ACSC00__bg__desc">
            <h2>맞춤형 교육 시스템</h2>
            <p>전국 최초 학생형 맞춤 교육</p>
            <p>입문부터 개발까지 한방에</p>
          </div>

          <div className="ACSC00__bg__arrow">
            <ArrowDownwardIcon />
          </div>
        </div>
      </div>
    );
  }
}
export default ACSC00;
