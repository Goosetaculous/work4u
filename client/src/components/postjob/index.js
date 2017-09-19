import React , { Component } from 'react';
import SideBar from '../../components/shared/sidebar'
import Wrapper from '../../components/shared/content'
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class PostJob extends Component {
	constructor(props){
	  super(props);
	  this.state={
		  date:'',
		  description:'',
		  location: '',
		  price: '', 
		  details:''
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
					<TextField
						hintText="Full Description of Job"
						errorText="Required"
						multiLine={true}
						rows={5}
						rowsMax={5}
						onChange={(event, newValue) => this.setState({details: newValue})}
					/><br/>
				</div>

			</Wrapper>
		</div>

    );
  }
}



export default PostJob;