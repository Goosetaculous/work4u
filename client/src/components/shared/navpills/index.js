import React from "react";
import { Link } from "react-router-dom";
const Navpills = () =>
    <ul className="nav nav-tabs">
        <li className={window.location.pathname === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
        </li>
        <li className={window.location.pathname === "/jobs" ? "active" : ""}>
            <Link to="/jobs">Jobs</Link>
        </li>
        <li className={window.location.pathname === "/profile" ? "active" : ""}>
            <Link to="/profile">Profile</Link>
        </li>
        <li className={window.location.pathname === "/applicant" ? "active" : ""}>
            <Link to="/applicant">Applicants</Link>
        </li>
        <li className={window.location.pathname === "/postjob" ? "active" : ""}>
            <Link to="/postjob">Post Jobs</Link>
        </li>
        
    </ul>;
export default Navpills;