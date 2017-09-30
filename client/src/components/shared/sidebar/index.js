import React , { Component } from 'react'
import { Link } from "react-router-dom"
import {Card, CardActions, CardHeader,  CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Auth from '../../../Auth/Auth';

//Auth Constant
const auth = new Auth();

const style = {
    card: {
        display: 'block',
        width: '100%',
        height: '100%'
    },
    CardHeader:{
        color: '#616161'
    },
    FlatButton:{
        display:"block"
    }
}


class SideBar extends Component{
    constructor(){
        super()
    }
   
    render(){

        return (
             <div style={{paddingRight:"10px", marginTop:"15px",width:"30%", minHeight: "550px"}}>

                <Card style={style.card}>
                    <CardHeader
                        style={style.CardHeader}
                        title={this.props.given_name}
                        subtitle={this.props.family_name}
                         avatar={this.props.picture}
                    />
                    <CardActions>
                        <Link to="/jobs"><FlatButton label="All Jobs"/></Link>
                        <Link to="/postjob"><FlatButton label="Post A Job"/></Link>
                        <Link to="/profile"><FlatButton label="Manage Jobs"/></Link>
                        <FlatButton label="Log Out" onClick={()=>auth.logout()} />
                    </CardActions>s
                </Card>
            </div>
        )
    }
}
export default SideBar