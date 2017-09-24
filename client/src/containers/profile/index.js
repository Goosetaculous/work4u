import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class UserList extends Component {
    render(){
        {console.log(this.props.user)}
        return(

            <h1>list</h1>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.users
    }


}

export default connect(mapStateToProps)(UserList)