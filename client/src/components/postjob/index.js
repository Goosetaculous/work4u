import React , { Component } from 'react';
import { Link } from "react-router-dom"
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
	constructor(props) {
	    super(props);

	    this.state = {
	      postDate: null,
	      postedBy: null,
	      shortDescript: null,
	      location: null,
	      price: null,
	      jobDetails: null,
	    };
  	}

  	handleInputChange = (event, value) => {
  		let value = event.target.value;
	    const name = event.target.name;
	    this.setState({
	          [name]: value
	    });
  };
	


    handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
	    event.preventDefault();
	   
	    this.setState({
		  postDate: "",
	      postedBy: "",
	      shortDescript: "",
	      location: "",
	      price: "",
	      jobDetails: ""
		      
	    });
	  };
  	
	    
  	


  	



	//   this.state = {
 //      	postDate: null,
 //      	postedBy: null,
 //      	shortDescript: null,
 //      	location: null,
 //      	price: null,
 //      	jobDetails: null
 //      };

	// this.handleInputChange = this.handleInputChange.bind(this);
 //    this.handleClick = this.handleClick.bind(this);
	// }

	// handleClick(event) {
 //    	event.preventDefault();
 //    	alert('Your job was submitted');
 //  	}
	
	// handleChange(event) {
 //    	this.setState({value: event.target.value});
 //  	}
  	
	// handleInputChange(event) {
	//     // const target = event.target;
	//     // const value = target.value;
	//     // const name = target.name;

	//     this.setState({
	//       [name]: value
	//     });

	//     console.log(value);
	//  }

	

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
						name='postDate'
						hintText="Date of the Job"
						errorText="Required"
						value={this.state.postDate}
						onChange={this.handleInputChange}
					/>

					<TextField
						name='postedBy'
						hintText="John Doe"
						errorText="Required"
						value={this.state.postedBy}
						onChange={this.handleInputChange}
					/>

					<TextField
						name='shortDescript'
						hintText="Paint my house"
						errorText="Required"
						value={this.state.shortDescript}
						onChange={this.handleInputChange}
					/>

					<TextField
						name='location'
						hintText="Los Angeles, CA"
						errorText="Required"
						value={this.state.location}
						onChange={this.handleInputChange}
					/>
					</div>

				<div style={{width: "50%", float: "right"}}>
					
				
					<TextField
						name='price'
						hintText="Price - $30.00"
						errorText="Required"
						value={this.state.price}
						onChange={this.handleInputChange}
					/>
				
					
					<TextField
						name='jobDetails'
						hintText="Full Description of Job"
						errorText="Required"
						value={this.state.jobDetails}
						multiLine={true}
						rows={5}
						rowsMax={5}
						onChange={this.handleInputChange}
					/><br/>
					
					<RaisedButton label="Submit" primary={true} onClick={this.handleFormSubmit}/>
				</div>
				
			</Wrapper>
		</div>

    );
  }
}



export default PostJob;