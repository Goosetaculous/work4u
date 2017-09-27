import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import SideBar from '../../components/shared/sidebar'
import Wrapper from '../../components/shared/content'
import PopulateCards from '../shared/cards'
import FlatButton from 'material-ui/FlatButton';

//API

import API from '../../utils/API'



class Jobs extends Component{
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

    componentDidMount(){

        API.getAllJobs("59ca67f94338f41e975c9b77").then((res)=>{
            console.log(res)
        })

        // API.getUser(this.state.user_id).then((res)=>{
        //     console.log(res.data)
        //     this.setState({
        //         skills: res.data[0].skills || [],
        //         _id: res.data[0]._id
        //     })
        // }).catch((err)=>{
        //     console.log("ERR ",err)
        // })

    }

    render(){
        const { profile } = this.state;
        return(
            <div className="container">
                <SideBar picture={profile.picture} given_name={profile.given_name} family_name={profile.family_name}/>
                <Wrapper>
                    <div style={{textAlign: "center"}}>
                        <TextField hintText="Job Keywords"/><FlatButton label="Search" primary={true}/>
                        <br/>
                        <PopulateCards/>
                    </div>
                </Wrapper>
            </div>
        )
    }
}

export default Jobs