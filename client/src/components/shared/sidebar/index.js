import React , { Component } from 'react'
import { Link } from "react-router-dom"
import {Card, CardActions, CardHeader,  CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Auth from '../../../Auth/Auth';

//Auth Constant
const auth = new Auth();


class SideBar extends Component{
    constructor(){
        super()
    }
   
    render(){

        return (
            <div style={{paddingRight:"10px", marginTop:"1px",width:"20%"}}>

                <Card>
                    <CardHeader
                        title={this.props.given_name}
                        subtitle={this.props.family_name}
                         avatar={this.props.picture}
                    />
                    <CardTitle title="Expert in:" />
                    <CardText>
                       Moving,sleeping
                    </CardText>
                    <CardActions>
                        <Link to="/postjob"><FlatButton label="Post Jobs"/></Link>
                        <FlatButton label="All Jobs" />
                        <FlatButton label="Log Out" onClick={()=>auth.logout()} />
                    </CardActions>s
                </Card>
            </div>
        )
    }
}
export default SideBar