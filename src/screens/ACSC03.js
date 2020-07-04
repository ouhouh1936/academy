import React from "react";
import Lnb from "../components/Lnb";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import Roll from "react-reveal/Roll";
import LightSpeed from "react-reveal/LightSpeed";
import Reveal from "react-reveal/Reveal";

class ACSC03 extends React.Component {
  render() {
    return (
      <div>
        <div>
          {" "}
          <Lnb title="Notice" column="HOME > Abouts" />
          <Fade left>
            <p>안녕하세요 금학수학학원입니다.</p>
          </Fade>
          <Fade bottom>
            <p>안녕하세요 금학수학학원입니다.</p>
          </Fade>
          <Flip top>
            <p>천둥번개 우루루쾅쾅 </p>
          </Flip>
          <Zoom top>
            <p>은진이 바보</p>
          </Zoom>
          <Rotate left>
            <p>꽥꼬.....닭.....</p>
          </Rotate>
          <Bounce top>
            <p>소떡소떡</p>
          </Bounce>
          <Slide top>
            <p>초콜렛 먹고싶다</p>
          </Slide>
          <Roll top>
            <p>배고파</p>
          </Roll>
          <LightSpeed top>
            <p>ㅋㅋㅋㅋㅋ</p>
          </LightSpeed>
          <Reveal left>
            <p>은하</p>
          </Reveal>
        </div>
      </div>
    );
  }
}
export default ACSC03;
