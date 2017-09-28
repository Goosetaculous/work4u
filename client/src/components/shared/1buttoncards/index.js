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
    }

    applyJob(job_id){
        console.log("userId",this.props._id)
        console.log("jobId",job_id)
        API.applyToJob(job_id, this.props._id).then((res)=>{
            console.log(res)
            this.props.history.push("/jobs");
        })

    }

    createCard(job){
        return(
            <Card>

                <CardHeader
                    title={`${job.jobName} in ${job.location}`}
                    // avatar="images/jsa-128.jpg"
                />

                <CardText>
                    som job description
                </CardText>
                <CardActions>
                    <FlatButton label="Apply" onClick={()=>this.applyJob(job._id)} />
                </CardActions>
            </Card>
        )

    }

    render(){
        return(
            <div style={styles.root}>
                {console.log(this.props.jobs)}
                {this.props._id}
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                    cols={4}
                    padding={3}
                >
                    {this.props.jobs.map((job) => this.createCard(job) )}
                </GridList>
            </div>

        )
    }

}

export default PopulateCards