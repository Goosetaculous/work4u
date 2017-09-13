import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Profile from './components/profile/'
import Home from './components/home/';
import Jobs from './components/jobs/'

import Footer from './components/shared/footer'
import Navpills from './components/shared/navpills';
import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <Router>
                        <div>
                            <Navpills/>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/Profile" component={Profile}/>
                            <Route exact path="/jobs" component={Jobs}/>
                        </div>
                    </Router>
                </MuiThemeProvider>
                <Footer/>
            </div>
        );
    }
}

export default App;
