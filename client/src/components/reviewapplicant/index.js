import React , { Component } from 'react';
import SideBar from '../../components/shared/sidebar';
import Wrapper from '../../components/shared/content';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class ReviewApplicant extends Component {
	constructor(){
        super()
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
			<div style={{width:"100%"}}>
      		
	          <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
			</div>

	    </Wrapper>        
      </div>
    );
  }
}



export default ReviewApplicant;