import React from "react";
import { HashRouter } from "react-router-dom";
import App from "../App";

class Root extends React.Component {
  render() {
    return (
      <HashRouter>
        <App />
      </HashRouter>
    );
  }
}
export default Root;
