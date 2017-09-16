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

render() {
    return (
      <div className="container">
      	<SideBar/>
      	<Wrapper>
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
	          <RaisedButton label="Post Your Job" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
	    </Wrapper>        
      </div>
    );
  }
}

const style = {
 margin: 15,
};

export default PostJob;