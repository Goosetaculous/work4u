import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import SideBar from '../../components/shared/sidebar'
import Wrapper from '../../components/shared/content'
import PopulateCards from '../shared/1buttoncards/'
import Dialog from 'material-ui/Dialog';

import FlatButton from 'material-ui/FlatButton';

//API

import API from '../../utils/API'



class Jobs extends Component{
    constructor(){
        super()
        this.state={
            jobs:[],
            term:"",
            open: false

        }
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
        this.allJobs()
    }

    handleOpen = () => {
        this.setState({open: true});
    }

    handleClose = () => {
        this.setState({open: false});
    }

    handleInputChange=(event)=>{
        this.setState({
            term: event.target.value
        })

    }

    allJobs(){
        API.getAllJobs(localStorage.getItem("db_id")).then((res)=>{
            this.setState({
                jobs: res.data,
                _id: localStorage.getItem("db_id")
            })
        })
    }



    search=()=>{
        if(this.state.term === ''){
            this.handleOpen()
        }else{
            API.getSearchJobs(this.state.term,this.state._id).then((res)=>{
                console.log(res)
                this.setState({
                    jobs: res.data
                })
            })

        }


    }

    reset=()=>{
        this.setState({
            term:""
        })
        this.allJobs()
    }

    render(){
        const actions = [
            <FlatButton
                label="OK"
                primary={true}
                onClick={this.handleClose}
            />

        ];
        const { profile } = this.state;
        return(
            <div className="container">
                <SideBar picture={profile.picture} given_name={profile.given_name} family_name={profile.family_name}/>
                <Wrapper>
                    <div style={{textAlign: "center"}}>
                        <TextField name='search_field' hintText="Job Keywords" value={this.state.term} onChange={this.handleInputChange} />
                        <FlatButton label="Search" primary={true} onClick={()=>this.search()}/>
                        <FlatButton label="Reset" primary={true} onClick={()=>this.reset()}/>
                        <br/>
                        <PopulateCards jobs={this.state.jobs} _id={this.state._id} history={this.props.history}/>
                    </div>
                </Wrapper>


                <Dialog
                    title="Empty Keyword search"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    Please type in a search term.
                </Dialog>

            </div>
        )
    }
}

export default Jobs