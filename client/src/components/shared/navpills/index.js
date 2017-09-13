import React from "react";
import { Link } from "react-router-dom";
const Navpills = () =>
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Home</Link>
    </li>
    <li className={window.location.pathname === "/about" ? "active" : ""}>
      <Link to="/alljobs">All Jobs</Link>
    </li>
      <li className={window.location.pathname === "/profile" ? "active" : ""}>
          <Link to="/profile">Profile</Link>
      </li>
  </ul>;
export default Navpills;