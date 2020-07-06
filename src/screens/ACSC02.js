import React from "react";
import Lnb from "../components/Lnb";
import axios from "axios";

class ACSC02 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: "",
      endDate: "",

      file: null,
      filename: "-",
    };
  }
  componentDidMount = async () => {
    // await axios.get(
    //   "http://localhost:5000/api/testREST",
    //   {},
    //   {
    //     headers: {
    //       "Content-Type": "applcation/json",
    //     },
    //   }
    // );

    await axios.post(
      "http://localhost:5000/api/dataTest",
      {
        params: "테스트 데이터 전송",
      },
      {
        headers: {
          "Content-Type": "applcation/json",
        },
      }
    );
  };
  render() {
    const { startDate, endDate, filename } = this.state;
    return (
      <div className="ACSC02">
        <Lnb title="Info" column="HOME > Abouts" />
        <div className="dateBox">
          <div className="dateBox__col1">
            <div>시작일</div>
            <input
              type="date"
              name="startDate"
              value={startDate}
              onChange={this._dateChangeHandler}
            />
          </div>
          <div className="dateBox__col2">
            <div>~</div>
          </div>
          <div className="dateBox__col3">
            <div>종료일</div>
            <input
              type="date"
              name="endDate"
              value={endDate}
              onChange={this._dateChangeHandler}
            />
            <button onClick={this._cheakDate}> 확인</button>
          </div>
        </div>
        <div className="fileBox">
          <input
            className="inputFile"
            id="inputFile"
            type="file"
            onChange={this._fileChangeHandler}
          ></input>
          <div>{filename}</div>
          <label className="fileBox__id" htmlFor="inputFile">
            파일업로드
          </label>
        </div>
      </div>
    );
  }
  _fileChangeHandler = (event) => {
    const file = event.target.files[0];
    this.setState({
      filename: file.name,
      file: file,
    });
  };
  _dateChangeHandler = (event) => {
    let nextState = {};

    nextState[event.target.name] = event.target.value;

    this.setState(nextState);
  };

  _cheakDate = () => {
    const { startDate, endDate } = this.state;

    console.log(`${startDate}부터 ${endDate}까지 조회`);
  };
}
export default ACSC02;
