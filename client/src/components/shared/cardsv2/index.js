import React ,  { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';




class Cardv2 extends Component { 
  constructor(){
        super()
    }



  render(){
    return(
      <Card >
        <CardTitle title={this.props.job_title} subtitle="Card subtitle" />
        <CardText>
            {this.props.job_description}
        </CardText>
        <CardActions>
          <FlatButton label="apply" />
          <FlatButton label="discard" />
        </CardActions>
      </Card>
    )
  }
};

export default Cardv2;

