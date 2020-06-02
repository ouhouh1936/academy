import React from "react";
import { NavLink } from "react-router-dom";

class MenuBar extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__logo">
          <NavLink to="/">
            <img src="#" alt="LOGO" />
          </NavLink>
        </div>
        <div className="header__menus">
          <ul>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/info">Info</NavLink>
            </li>
            <li>
              <NavLink to="/notice">Notice</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default MenuBar;
