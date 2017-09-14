import React, {Component} from "react";
// import {BrowserRouter as Router, Route} from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Profile from './components/profile/'
import Home from './components/home/';
import Jobs from './components/jobs/'

import Footer from './components/shared/footer'
import Navpills from './components/shared/navpills';
import "./App.css";

//Auth Imports
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import { Route, Router } from 'react-router-dom';

//Auth Constant
const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}



class App extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <Router history={history} component={App}>
                        <div>
                            <Navpills/>

                            <Route path="/" render={(props) => <Home auth={auth} {...props} />} />
                            <Route path="/Profile" render={(props) => <Profile auth={auth} {...props} />} />
                            <Route path="/jobs" render={(props) => <Profile auth={auth} {...props} />} />
                            <Route path="/callback" render={(props) => {
                            handleAuthentication(props);
                            return <Callback {...props} /> 

                        </div>
                    </Router>
                </MuiThemeProvider>
                <Footer/>
            </div>
        );
    }
}

export default App;
