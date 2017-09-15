import React , { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Auth from '../../../Auth/Auth';
//Auth Constant
const auth = new Auth();


class SideBar extends Component{
    constructor(){
        super()
    }
    componentWillMount(){
        this.setState({ profile: {} });
        const { userProfile, getProfile } = this.props.auth;
        if (!userProfile) {

            getProfile((err, profile) => {
                this.setState({ profile });
            });
        } else {
            this.setState({ profile: userProfile });
        }


    }

    render(){
        return (
            <div style={{paddingRight:"10px", marginTop:"1px"}}>
                {console.log(this.state.profile.picture)}
                <Card>
                    <CardHeader
                        title="Goose"
                        subtitle="Aranez"
                        avatar={this.state.profile.picture}
                    />
                    <CardTitle title="Expert in:" />
                    <CardText>
                       Moving,sleeping
                    </CardText>
                    <CardActions>
                        <FlatButton label="Post a Job" />
                        <FlatButton label="All Jobs" />
                        <FlatButton label="Log Out" onClick={()=>auth.logout()} />
                    </CardActions>
                </Card>
            </div>
        )
    }
}
export default SideBar