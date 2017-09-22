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

const skills = ['Mechanical(Auto)','Electrical(Auto)','Body Work(Auto)','Installation(Auto)', 
				'Construction(House)','Plumbing(House)','Electrical(House)','Maintenance(House)', 
				'Moving(General)','Nanny(General)','Modeling(General)','Event(General)','Adult(General)'];
for (let i = 0; i < skills.length; i++ ) {
  skills.push(<MenuItem value={i} key={i} primaryText={{i}} />);
}



class PostJob extends Component {
	constructor(props){
	  super(props);
	  this.state={
		  date:'',
		  description:'',
		  location: '',
		  price: '', 
		  details:'',
		  value: 10
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
						onChange={(event, newValue) => this.setState({date: newValue})}
					/>

					<TextField
						hintText="Paint my house"
						errorText="Required"
						onChange={(event, newValue) => this.setState({description: newValue})}
					/>
					<TextField
						hintText="Los Angeles, CA"
						errorText="Required"
						onChange={(event, newValue) => this.setState({location: newValue})}
					/>
				</div>
				<div style={{width: "50%", float: "right"}}>
					<TextField
						hintText="Price - $30.00"
						errorText="Required"
						onChange={(event, newValue) => this.setState({price: newValue})}
					/>
					<DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange}>
				        {skills}
				    </DropDownMenu>
					
					<TextField
						hintText="Full Description of Job"
						errorText="Required"
						multiLine={true}
						rows={5}
						rowsMax={5}
						onChange={(event, newValue) => this.setState({details: newValue})}
					/><br/>
					<RaisedButton label="Submit" primary={true}  onClick={(event) => this.handleClick(event)}/>
				</div>

			</Wrapper>
		</div>

    );
  }
}



export default PostJob;