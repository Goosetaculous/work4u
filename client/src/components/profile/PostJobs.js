import React , { Component } from 'react';
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
      <div>
         <DatePicker 
           hintText="Date of the Job"
           onChange = {(event,newValue) => this.setState({date:newValue})}
          />
          
          <TextField
            hintText="What is the job?"
            errorText="This field is required"
            floatingLabelText="Wash my car"
            onChange = {(event,newValue) => this.setState({description:newValue})}
          /><br />
          <TextField
            hintText="Location of Job?"
            errorText="This field is required"
            floatingLabelText="New York City, NY"
            onChange = {(event,newValue) => this.setState({location:newValue})}
          /><br />
          <TextField
            hintText="Price"
            errorText="This field is required"
            floatingLabelText="20"
            onChange = {(event,newValue) => this.setState({price:newValue})}
          /><br />
          <TextField
            hintText="Full Description of Job"
            errorText="This field is required"
            multiLine={true}
            rows={4}
            rowsMax={4}
            onChange = {(event,newValue) => this.setState({details:newValue})}
          /><br />
          <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         
         
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default PostJob;