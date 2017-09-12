import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Home from './components/home/'
import Alljobs from './components/alljobs/'
import Navpills from './components/shared/navpills'

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Navpills/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/alljobs" component={Alljobs}/>
                </div>
            </Router>
        );
    }
}

export default App;
