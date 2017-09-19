import React , { Component } from 'react';
import SideBar from '../../components/shared/sidebar'
import Wrapper from '../../components/shared/content'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class AcceptJob extends Component {
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

	render() {
	    const { profile } = this.state;
	    return (
	      <div className="container">
			  <SideBar picture={profile.picture} given_name={profile.given_name} family_name={profile.family_name}/>
	      	<Wrapper>
				<div style={{width:"100%"}}>
	      		<h5>Post A Job</h5>
		         <DatePicker 
		           hintText="Date of the Job"
		           onChange = {(event,newValue) => this.setState({date:newValue})}
		          />
		        <p>What?</p> 
		          <TextField
		            hintText="Paint my house"
		            errorText="Required"
		            onChange = {(event,newValue) => this.setState({description:newValue})}
		          /><br />
		        <p>Where?</p> 
		          <TextField
		            hintText="Los Angeles, CA"
		            errorText="Required"
		            onChange = {(event,newValue) => this.setState({location:newValue})}
		          /><br />
		        <p>How Much?</p> 
		          <TextField
		            hintText="$30.00"
		            errorText="Required"
		            onChange = {(event,newValue) => this.setState({price:newValue})}
		          /><br />
		        <p>More Details about the Job?</p> 
		          <TextField
		            hintText="Full Description of Job"
		            errorText="Required"
		            multiLine={true}
		            rows={2}
		            rowsMax={2}
		            onChange = {(event,newValue) => this.setState({details:newValue})}
		          /><br />

		          <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
				</div>

		    </Wrapper>        
	      </div>
	    );
	  }
}



export default AcceptJob;