import React , { Component } from 'react'
import SideBar from '../../components/shared/sidebar'
import Wrapper from '../../components/shared/content'
import ProfileTabs from './tabs/'
import API from '../../utils/API'

// NOTES:
// Job Status: initiated , applied , confirmed , completed 

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

    postStateToApplied = (postId) =>{
        console.log("================Applied Function  ================");
        console.log("Post to Applied function triggered");

        let user_id = localStorage.getItem('user_id';
        


        console.log("================Applied Function END ================");

    }

  
    getUserId(){

        console.log("===============GET USER INFO ID=================");
        console.log("Get user ID function triggered");
        
        let userObject = API.getUser(localStorage.getItem('user_id'))
        .then((res) => {
            console.log(res.data[0]);
            console.log("================GET USER INFO ID END================");
        });
    }




    render(){
        const { profile } = this.state;
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

export default  Profile