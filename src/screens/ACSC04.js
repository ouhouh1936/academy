import React from "react";
import Lnb from "../components/Lnb";

class ACSC04 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      param1: "",
      param2: "",
      param3: "",
    };
  }
  render() {
    const { param1, param2, param3 } = this.state;
    return (
      <div>
        <Lnb title="Contect" column="HOME > Contect" link="/" />
        <input
          type="text"
          id="txt"
          name="txtValue1"
          value={param1}
          onChange={this._onchangeHandler}
        />
        <input
          type="text"
          id="txt"
          name="txtValue2"
          value={param2}
          onChange={this._onchangeHandler}
        />
        <input
          type="text"
          id="txt"
          name="txtValue3"
          value={param3}
          onChange={this._onchangeHandler}
        />
        <input
          type="button"
          id="txt"
          value="확인"
          onClick={this._onclickHandler}
        />
      </div>
    );
  }
  _onchangeHandler = (event) => {
    let nextState = {};

    nextState[event.target.name] = event.target.value;
    this.setState(nextState);
  };

  _onclickHandler = () => {
    const { param1, param2, param3 } = this.state;

    console.log(param1);
    console.log(param2);
    console.log(param3);
  };
}

export default ACSC04;
