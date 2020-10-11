import React, { Component } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <div>
        <nav className="NavbarItems">
          <h1 className="logo">
            <a href="/" className="logo-name">
              <img id="globe" src="globe.png"/>Times Today&nbsp;&nbsp;
            </a>
          </h1>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>

          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink
                    className={item.cName}
                    activeClassName="active-page"
                    to={item.url}
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
