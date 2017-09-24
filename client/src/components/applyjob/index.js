import React , { Component } from 'react'
import SideBar from '../../components/shared/sidebar'
import Wrapper from '../../components/shared/content'
import ProfileTabs from './tabs/'


class ApplyJob extends Component{
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
                        <h4>Job Information</h4>
                        <p>Posted By: {}</p>
                        <p>Job Description:{}</p>
                        
                        <RaisedButton label="Apply" primary={true}  onClick={(event) => this.handleClick(event)}/>

                    </div>

                </Wrapper>
            </div>

        )
    }
}

export default  ApplyJob