import React , { Component } from 'react';
import SideBar from '../../components/shared/sidebar'
import Wrapper from '../../components/shared/content'
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 200,
  },
};




class PostJob extends Component {
	constructor(props){
	  super(props);
	  this.state={
		  postDate:'',
		  postedBy:'',
		  shortDescript:'',
		  location: '',
		  price: '', 
		  jobDetails:'',
		  value: 2
	  	}
	 
	 }
	
	handleChange = (event, index, value) => this.setState({value});

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
				<h5>Post A Job</h5>
				<div style={{width: "50%", float: "left"}}>

					<DatePicker
						hintText="Date of the Job"
						errorText="Required"
						onChange={(event, newValue) => this.setState({postDate: newValue})}
					/>

					<TextField
						hintText="Mickey Mouse"
						errorText="Required"
						onChange={(event, newValue) => this.setState({postedBy: newValue})}
					/>

					<TextField
						hintText="Paint my house"
						errorText="Required"
						onChange={(event, newValue) => this.setState({shortDescript: newValue})}
					/>
					<TextField
						hintText="Los Angeles, CA"
						errorText="Required"
						onChange={(event, newValue) => this.setState({location: newValue})}
					/>
					<TextField
						hintText="Price - $30.00"
						errorText="Required"
						onChange={(event, newValue) => this.setState({price: newValue})}
					/>
				</div>

				<div style={{width: "50%", float: "right"}}>
					<DropDownMenu value={this.state.value} onChange={this.handleChange} openImmediately={true}>
				        <MenuItem value={1} primaryText="Auto" />
				        <MenuItem value={2} primaryText="Mechanical" />
				        <MenuItem value={3} primaryText="Home" />
				        <MenuItem value={4} primaryText="Moving" />
				        <MenuItem value={5} primaryText="Miscellaneous" />
      				</DropDownMenu>
					
					<TextField
						hintText="Full Description of Job"
						errorText="Required"
						multiLine={true}
						rows={5}
						rowsMax={5}
						onChange={(event, newValue) => this.setState({jobDetails: newValue})}
					/><br/>
					
					<RaisedButton label="Submit" primary={true}  onClick={(event) => this.handleClick(event)}/>
				</div>

			</Wrapper>
		</div>

    );
  }
}



export default PostJob;