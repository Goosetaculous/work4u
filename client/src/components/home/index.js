// import react
import React , { Component } from 'react';


// import private css
import "./style.css";

// import private components
// import TopNavbar from "../shared/topnavbar/";
import HomePageJobList from "./HomePageJobList.js";

// import NavBar Login TESTING
import Navtest from "../shared/Navtest/";


// Import of auth
import Auth from '../../Auth/Auth';

//Auth Constant
const auth = new Auth();




class Homepage extends Component{
    render(){
        return(
            <div className="home-container">
                <Navtest />
                <div className="hook-line"></div>
                <HomePageJobList />

            </div>
        )
    }
}

export default  Homepage