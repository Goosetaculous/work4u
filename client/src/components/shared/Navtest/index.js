// import react
import React , { Component } from 'react';

// import private css
import "./style.css";

// import material ui
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
// import RaisedButton from 'material-ui/RaisedButton';

//import logo
//import "./logo.png"
// Import of auth
import Auth from '../../../Auth/Auth';

// Import API
import API from "../../../utils/API";

//Auth Constant
const auth = new Auth();


const style = {
    margin: 12,
};

const image = require('./logo.png')



class Login extends Component {
    static muiName = 'FlatButton';
    login() {
      auth.login();
    }

    logout() {
      auth.logout();
    }
  
    render() {
        const { isAuthenticated } = auth;
        return (
        <div>
            {
              !isAuthenticated() && (
                <RaisedButton
                  label="Log In"
                  style={style}
                  onClick={this.login.bind(this)}
                />
              )
            }
            {
              isAuthenticated() && (
                <RaisedButton
                  label="Log Out"
                  style={style}
                  onClick={this.logout.bind(this)}
                />
              )
            }
        </div>
        );
    }
}


class Navtest extends Component{
    state = {
        logged: true,
    };
    handleChange = (event, logged) => {
        this.setState({logged: logged});
    };
    render(){
        const { isAuthenticated } = auth;
        return(
            <div>
                <AppBar
                  className="white-app-bar"
                  style={{width: "33%", float: "left", backgroundColor:'grey500'}}
                  iconElementLeft={<img className='logo' src={image} />}
                />
                <AppBar
                    className="white-app-bar"
                    style={{width: "33%", float: "right", backgroundColor:'grey500'}}
                    //iconElementLeft={<img className='logo' src={image} />}
                    iconElementRight={ <Login />}
                />
                
            </div>
        )
    }
}

export default Navtest