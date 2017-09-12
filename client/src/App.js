import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Home from './components/home/'
import Navpills from './components/shared/navpills'

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Navpills/>
                    <Route exact path="/" component={Home}/>

                </div>
            </Router>
        );
    }
}

export default App;
