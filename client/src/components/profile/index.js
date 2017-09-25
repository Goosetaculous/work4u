import React , { Component } from 'react'
import SideBar from '../../components/shared/sidebar'
import Wrapper from '../../components/shared/content'
import ProfileTabs from './tabs/'
import API from '../../utils/API'

//REDUX STUFF
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

//import actions
import {loggedInUser} from '../../actions/';


// NOTES:
// Job Status: initiated , applied , confirmed , completed 


class Profile extends Component{
    constructor() {
        super();
        this.state = {
          test: "",
          post_array: []
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

    postApplied = (job_id) =>{
        console.log("================Applied Function  ================");
        console.log("Post to Applied function triggered");

        let user_id = localStorage.getItem('user_id');
        API.applyToPost(user_id, job_id).then((res) => {
            console.log(res.data[0]);
            console.log("================Applied Function END ================");
        });

       
    }

    postConfirmed = (job_id) =>{
        console.log("================Post Comfirmed Function  ================");
        console.log("Post confirmed function triggered");

        API.confirmPost(job_id).then((res) => {
            console.log(res.data);
            console.log("================Post Comfirmed Function END ================");
        }); 
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
                        <ProfileTabs />
                    </div>
                </Wrapper>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        user: state.users,
        activeUser: state.activeUser
    }
}

//dispatch -  call a function
function matchDispatchToProps(dispatch){

    return bindActionCreators({
        LoggedInUser: loggedInUser
    },dispatch)

}


export default connect(mapStateToProps,matchDispatchToProps)(Profile)