// import react
import React , { Component } from 'react';

// import private components
import TopNavbar from "../shared/topnavbar/";
import HomePageJobList from "./HomePageJobList.js";
import Footer from "../shared/footer/";

// import private css
import "./style.css";

class Homepage extends Component{
    render(){
        return(
            <div className="home-container">
                <TopNavbar />
                <div className="hook-line"></div>
                <HomePageJobList />
                <Footer />
            </div>
        )
    }
}

export default  Homepage