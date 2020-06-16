import React from "react";
import Lnb from "../components/Lnb";

class ACSC01 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataList: [],
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      const arr = ["경민", "예림", "효진"];

      this.setState({ dataList: arr });
    }, 3000);
  };
  render() {
    const { dataList } = this.state;

    return (
      <div>
        <div className="ASCS01">
          <Lnb title="About" column="HOME > Abouts" />
          {dataList.length === 0 ? (
            <div>데이터를 불러오는 중입니다 잠시만 기다려주세요 ... </div>
          ) : (
            dataList.map((data, idx) => {
              return (
                <div>
                  {idx + 1}.{data}
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  }
}
export default ACSC01;
