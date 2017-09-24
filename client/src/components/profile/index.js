import React , { Component } from 'react'
import SideBar from '../../components/shared/sidebar'
import Wrapper from '../../components/shared/content'
import ProfileTabs from './tabs/'
import API from '../../utils/API'

//REDUX STUFF

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';



class Profile extends Component{
    constructor() {
        super();
        this.state = {
          test: ""
        }
    };


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

    test = (test) => {
        console.log("hello from test");
        console.log(test, this)
        this.setState({test:test});

        return 
    }

  
    getUserId(){

        console.log("================================")
        console.log("Get user ID function triggered")
        console.log("================================")
        let userObject = API.getUser(localStorage.getItem('user_id')).then((res) => {
            console.log(res);
        });
    }




    render(){
        const { profile } = this.state;
        {console.log(this.props.user)}
        {this.getUserId()}
        return(

            <div className="container">
                <SideBar picture={profile.picture} given_name={profile.given_name} family_name={profile.family_name}/>
                <Wrapper>
                    <div>
                        <ProfileTabs passfunction={this.test}/>
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