import React from "react";
import { MenuBar } from "./layouts";
import { ACSC00, ACSC01, ACSC02, ACSC03, ACSC04 } from "./screens";
import { Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <MenuBar />
        </header>
        <main>
          <Route exact path="/" component={ACSC00} />
          <Route exact path="/about" component={ACSC01} />
          <Route exact path="/info" component={ACSC02} />
          <Route exact path="/notice" component={ACSC03} />
          <Route exact path="/contact" component={ACSC04} />
        </main>
      </div>
    );
  }
}

export default App;
