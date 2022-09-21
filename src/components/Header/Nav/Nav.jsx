import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Nav extends Component {
  render() {
    return <>
      <nav className="nav-bar">

        <Link to="/">Home</Link>
        <Link to="/todo_list">TODO</Link>
        <Link to="/weather_list">Weather</Link>

      </nav>
    </>
  }
}

export default Nav;
