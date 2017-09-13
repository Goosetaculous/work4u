import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

class Wrapper extends Component{

    render(){
        return(
            <Card className="main-content">
                {this.props.children}
            </Card>
        )
    }
}
export default Wrapper