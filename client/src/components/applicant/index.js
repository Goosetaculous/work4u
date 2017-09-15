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
    render(){
        return(
            <div className="container">
                <SideBar/>
                <Wrapper>
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
                </Wrapper>
            </div>
        )
    }
}

export default Applicant