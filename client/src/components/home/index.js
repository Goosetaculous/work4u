// import react
import React , { Component } from 'react';

// import private components
import TopNavbar from "../shared/topnavbar/";
import HomePageJobList from "./HomePageJobList.js";

import "./style.css"

/*const styles = {
    background: "url(http://youngworkers.org/wp-content/uploads/2010/02/teen-banner.png) no-repeat center center",
    margin: "10px 20px 10px 20px",
    backgroundSize: "contain",
    height: "200px",
}*/

class Homepage extends Component{
    render(){
        return(
            <div>
                <TopNavbar />
                <div className="hook-line">
                    More Doing, More Saving!
                </div>
                <div className="job-list">
                    Most Popular Jobs
                    <HomePageJobList />
                </div>

            </div>
        )
    }
}

export default  Homepage