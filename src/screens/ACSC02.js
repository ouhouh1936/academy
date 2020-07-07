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
    const inputData = {
      name: "오은하",
      age: 14,
      gender: "여성",
    };

    await axios.post(
      "http://localhost:5000/api/dataTest",
      {
        params: inputData,
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

          <button onClick={this._sendFileHanderler}>뺵앤들 빠일 전송</button>
        </div>
      </div>
    );
  }

  _sendFileHanderler = async () => {
    //1. 현재  업로드된 파일을 가져온다
    const { file } = this.state;
    // 2. 파일이 없다면 (null) 이라면 함수를 중단시킨다
    if (file === null) {
      alert("파일이 없습니다");
      return;
    }
    //3. form테그를 만든다
    let form = new FormData();
    //4. form테그에 파일을 넣는다
    form.append("uploadFile", file);
    //5.axios를 통해서 server로 전송한다.
    await axios.post("http://localhost:5000/api/fileUpload", form, {
      headers: {
        "Context-Type": "multipart/from-data",
      },
    });
  };
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
