import React , { Component } from 'react';

import SideBar from '../../components/shared/sidebar'
import Wrapper from '../../components/shared/content'
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import API from "../../utils/API.js";

//Image uploader to S3
import S3Uploader from "../S3uploader/index.js"


const styles = {
  customWidth: {
    width: 200,
  },
};

class PostJob extends Component {

	constructor(props){
		
		super(props);
		this.state ={
			jobType: "none",
			image_url: "not changed"

		}


		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = (event) => {
		  let newJob = {
			'jobName': this.state.jobName,
			'postedBy': localStorage.getItem("db_id"),
			'jobType': this.state.jobType,
			'jobLocation': this.state.jobLocation,
			'jobDate': this.state.jobDate,
			'jobPrice': this.state.jobPrice,
			'image_url': this.state.image_url,
			'jobDescription': this.state.jobDescription
		  };
		  console.log(newJob);
		  API.addAJob(newJob).then((res) => {
			  this.props.history.push("/profile");
		  });
  	}

  	handleImage = (image_url) => {
  		console.log("Test " + image_url);
  		this.setState({
  			image_url: image_url
  		});
  		console.log("===============Image Uploader==========");
  		
  		console.log("=======================================")
  		console.log(this.state.image);
  	}



	handleInputChange = (event) => {

	    const target = event.target;
	    const value = target.value;
		const name = target.name;
		
		console.log("Event: ");
		console.log(event);

	    this.setState({
	      [name]: value
	    });

	    console.log("Changing state field " + name + " to " + value);
	 }

	 // a dedicated on change event handler must be implemented for date picker
	 // see http://www.material-ui.com/#/components/date-picker for "onChange"
	 handleDateChange = (event, date) => {
		 console.log("Date is");
		 console.log(date);
		 this.setState({jobDate: date});
	 }

	 // a dedicated on change event handler must be implemented for dropdown menu
	 // see http://www.material-ui.com/#/components/dropdown-menu
	 handleMenuChange = (event, index, value) => {
		 console.log("Selected type of job is");
		 console.log(value);
		 this.setState({
			jobType: value
		 });
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
		{console.log(this.state.image)}
			<SideBar picture={profile.picture} given_name={profile.given_name} family_name={profile.family_name}/>
			<Wrapper>
				<h5>Post A Job</h5>
				<div style={{width: "50%", float: "left"}}>

					<TextField
						name='jobName'
						hintText="Job name"
						floatingLabelText="Job name"
						errorText={!this.state.jobName ? "Required":null}
						onChange={this.handleInputChange}
					/>

					<DatePicker
						name='JobDate'
						hintText="When do you want to get it done"
						floatingLabelText="Get it done by "
						errorText={!this.state.jobDate ? "Required": null}
						value={this.state.jobDate}
						onChange={this.handleDateChange}
					/>

					<TextField
						name='jobLocation'
						hintText="Your location"
						floatingLabelText="You location"
						errorText={!this.state.jobLocation? "Required": null}
						onChange={this.handleInputChange}
					/>

					<TextField
						name='jobDescription'
						hintText="Job Description"
						floatingLabelText="Job Description"
						errorText={!this.state.jobLocation? "Required": null}
						onChange={this.handleInputChange}
					/>
				</div>

				<div style={{width: "50%", float: "right"}}>
					
				
					<TextField
						name='jobPrice'
						hintText="How much you want to pay"
						floatingLabelText="Amount"
						errorText={!this.state.jobPrice? "Required": null}
						validations={this._mustBeNumber}
						onChange={this.handleInputChange}
					/>

					<div>
						<DropDownMenu value={this.state.jobType} onChange={this.handleMenuChange}>
							<MenuItem value={"none"} primaryText="What kind of job?" />
							<MenuItem value={"Electic"} primaryText="Electric" />
							<MenuItem value={"Plumbing"} primaryText="Plumbing" />
							<MenuItem value={"Gardening"} primaryText="Gardening" />
							<MenuItem value={"Automotive"} primaryText="Automotive" />
							<MenuItem value={"Moving"} primaryText="Moving" />
						</DropDownMenu>
					</div>
					<div>
						<S3Uploader
							handleImage={this.handleImage}
						/>
					</div>
					
					<RaisedButton label="Submit" primary={true}  onClick={(event) => this.handleClick(event)}/>
				</div>

			</Wrapper>
		</div>

    );
  }
}



export default PostJob;