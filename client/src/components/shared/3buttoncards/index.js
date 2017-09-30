import React ,  { Component } from 'react'
import {GridList, GridTile} from 'material-ui/GridList';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

//API
import API from '../../../utils/API'



const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 1000,
        overflowY: 'auto',
        padding: '2px'
    },
};


class PopulateCards extends Component {
    constructor(){
        super()
        this.state={
            applied: true
        }
    }


    createCard(job){
        return(
            <Card>
                <CardText>
                    <b>Job</b>: {job.jobName}
                    <br/>
                    <b>Location</b>: {job.location}
                </CardText>
                <CardActions>
                    <FlatButton label="Stop Posting" secondary={true} />
                    <FlatButton label="Confirm" primary={true} />
                    <FlatButton label="Decline" primary={true} onClick={(event)=>this.props.declineApplicantById(event, job._id, localStorage.getItem("db_id"))} />
                </CardActions>
            </Card>
        )

    }

    render(){
        return(
            <div style={styles.root}>
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                    cols={4}
                    padding={3}
                >
                    {this.props.jobs.length > 0? this.props.jobs.map((job) => this.createCard(job) ):<div>No Jobs found</div> }
                </GridList>
            </div>

        )
    }

}

export default PopulateCards