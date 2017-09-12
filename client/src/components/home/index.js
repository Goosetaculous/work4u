import React , { Component } from 'react'

import {Navbar, NavItem, Row, Col, Input, Carousel} from "react-materialize"

class Homepage extends Component{
    render(){
        return(
            <div>
                <Navbar brand='logo' left>
                    <NavItem href='get-started.html'>Explore Jobs</NavItem>
                    <NavItem href='get-started.html'>Post a Job</NavItem>
                    <h1>
                        Homepage - to be designed
                    </h1>
                    <NavItem href='components.html'>Components</NavItem>
                </Navbar>
                
            </div>
        )
    }
}

export default  Homepage