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

    /**
     *
     * @param job_id
     * applyToJob accepts job_id and user_id (object ID)
     */
    applyJob(job_id){
        API.applyToJob(job_id, this.props._id).then((res)=>{
            this.props.history.push("/profile");
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
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                    cols={4}
                    padding={3}
                >
                    {this.props.jobs.length > 0? this.props.jobs.map((job) => this.createCard(job) ):<div>Andy will post a job</div> }
                </GridList>
            </div>

        )
    }

}

export default PopulateCards