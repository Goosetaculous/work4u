import React, { Component } from 'react'

import SideBar from '../../components/shared/sidebar'
import Wrapper from '../../components/shared/content'
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


import Avatar from 'material-ui/Avatar';

class Applicant extends Component{
    constructor(){
        super()
    }
    componentWillMount() {
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
        const { profile } = this.state;
        return(
            <div className="container">
                <SideBar picture={profile.picture} given_name={profile.given_name} family_name={profile.family_name}/>
                <Wrapper>
                    <div>
                    <Card>
                        <CardHeader
                            title="Some name"

                            avatar="https://www.google.com/about/img/social/google-students-feed.svg"
                        />

                        <CardTitle title="Job Title" subtitle="Location" />
                        <CardText>
                            Job Description
                        </CardText>
                        <CardActions>
                            <FlatButton label="Hire" />
                            <FlatButton label="Cancel" />
                        </CardActions>
                    </Card>
                    </div>
                </Wrapper>
            </div>
        )
    }
}

export default Applicant