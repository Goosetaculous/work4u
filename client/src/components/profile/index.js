import React , { Component } from 'react'
import SideBar from '../../components/shared/sidebar'
import Wrapper from '../../components/shared/content'
import ProfileTabs from './tabs/'

//REDUX STUFF

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';



class Profile extends Component{
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
        {console.log(this.props.user)}
        return(
            <div className="container">
                <SideBar picture={profile.picture} given_name={profile.given_name} family_name={profile.family_name}/>
                <Wrapper>
                    <div>
                        <ProfileTabs/>
                    </div>

                </Wrapper>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.users
    }
}


export default connect(mapStateToProps)(Profile)