import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import SideBar from '../../components/shared/sidebar'
import Wrapper from '../../components/shared/content'
import PopulateCards from '../shared/cards'
import FlatButton from 'material-ui/FlatButton';


class Jobs extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="container">
                <SideBar/>
                <Wrapper>
                    <div style={{textAlign: "center"}}>
                        <TextField hintText="Job Keywords"/><FlatButton label="Search" primary={true}/>
                        <br/>
                        <PopulateCards/>
                    </div>
                </Wrapper>
            </div>
        )
    }
}

export default Jobs