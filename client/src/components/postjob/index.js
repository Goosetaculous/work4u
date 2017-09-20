import React , { Component } from 'react';
import SideBar from '../../components/shared/sidebar'
import Wrapper from '../../components/shared/content'
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
<<<<<<< HEAD
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const jobSkills = [
	{
		img:'https://dummyimage.com/250/ffffff/000000',
		title: 'Home Repair',
		value: 1
	},
	{
		img:'https://dummyimage.com/250/ffffff/000000',
		title: 'Auto Repair',
		value: 2
	},
	{
		img:'https://dummyimage.com/250/ffffff/000000',
		title:'Other things',
		value: 3
	},
	{
		img:'https://dummyimage.com/250/ffffff/000000',
		title: 'More things',
		value: 4
	},

];
=======
>>>>>>> e9c38a39634cc61941e4bc86ab2c580b9f89b2d0

class PostJob extends Component {
	constructor(props){
	  super(props);
	  this.state={
		  date:'',
		  description:'',
		  location: '',
		  price: '', 
		  details:'',
		  data: [], 
		  value: 0
	  	}
	 }
	
	handleChange = (event, index, value) => this.setState({value});

	renderDropdownList(skill){
		return(
			<MenuItem
				value={skill.value}
				primaryText={skill.title}
			/>
			)
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
					
					<DropDownMenu value={this.state.value} onChange={this.handleChange}>
			          {
			          	jobSkills.map((data)=>this.renderDropdownList(data))
			          }
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