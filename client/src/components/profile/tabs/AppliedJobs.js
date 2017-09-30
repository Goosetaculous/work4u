import React ,  { Component } from 'react'
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

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


class AppliedJobs extends Component {
    constructor(){
        super()
    }

    cancel = (event,job) => {
        console.log("========Cancel Applied Job========")
        
        console.log("job id: " + job._id)
        console.log("user id: " + this.props.user_id)
        API.removeApplicant(job._id, this.props.user_id).then(function(res){
            console.log(res)
        })
        console.log("=========Cancel Applied end=====")
        this.props.getAppliedJobs();
    }



createCard(job){
    if(job.status == "confirmed"){
        return(
             <Card>
                <CardHeader
                    title={`${job.jobName} in ${job.location}`}
                />
                <CardMedia>
                       
                      <img src={`${job.image_url}`} alt="" />
                </CardMedia>

                <CardText>
                    <h5> Job Description</h5>
                    <div>
                        {job.jobDescription}
                    </div>
                    <div>   
                    <h5> Next Steps</h5>
                      
                        Job has been confirmed by the poster. 
                        <br/>
                        Post will contact you shortly.
                        
                    </div>
                </CardText>
            </Card>
        )
    }else{
        return(
    
                <Card>

                    <CardHeader
                        title={`${job.jobName} in ${job.location}`}
                    />
                    <CardMedia>
                           
                          <img src={`${job.image_url}`} alt="" />
                    </CardMedia>

                    <CardText>
                        <h5> Job Description</h5>
                        <div>
                            {job.jobDescription}
                        </div>
                    </CardText>
                    <CardActions>
                        <FlatButton label="Cancel" onClick={(event) => this.cancel(event, job)} />
                    </CardActions>
                </Card>
        )
    }
}

    render(){
        return(
            <div style={styles.root}>
                <GridList
                    cellHeight={300}
                    style={styles.gridList}
                    cols={4}
                    padding={3}
                >
                    {this.props.appliedJobs.length > 0? this.props.appliedJobs.map((job) => this.createCard(job) ):<div>No Jobs found</div> }
                </GridList>
            </div>
        )
    }
}

export default AppliedJobs;