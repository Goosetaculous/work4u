import React ,  { Component } from 'react'
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import API from '../../../utils/API.js';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


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



class ConfirmedJobs extends Component {

    state = {jobs: []};

    constructor(){
        super()
    }

    componentWillMount() {
        //fetch("/job/all").then(res => res.json()).then(jobs => this.setState({jobs}));
        /*API.findJobsConfirmedByMe(localStorage.getItem('db_id')).then((res) => {
            console.log("Data from findJobsConfirmedByMe for user " + localStorage.getItem('db_id'));
            console.log(res.data);
            //console.log(res.data[0]);
            this.setState({jobs: res.data});
        });*/
        API.findJobsByPosterId(localStorage.getItem('db_id')).then((res) => {
            console.log("Data from findJobsByPoesterId: ");
            console.log(res);
            this.setState({jobs: res.data});
        });
    };

    goodReview = (event, jobId) => {
        console.log("Giving good review.");
        console.log(jobId);
        API.giveGoodReview(jobId).then((res) => {
            window.location.reload();
        });
    };
    badReview = (event, jobId) => {
        console.log("Giving bad review.");
        console.log(jobId);
        API.giveBadReview(jobId).then((res) => {
            window.location.reload();
        });
    };



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
                    {this.state.jobs.length > 0? this.state.jobs.map((job) => this.createCard(job) ):<div>No Jobs found</div> }
                </GridList>
            </div>
        )
    }
}






//     render(){
//         return(
//             <div style={styles.root}>
//                 <GridList
//                     cellHeight={60}
//                     style={styles.gridList}
//                     cols={1}
//                     padding={0}
//                 >
//                     {this.state.jobs.map((job) => {
//                         if (job.status == "confirmed" ) {
//                             return <GridTile
//                                         title={job.jobName}
//                                         titlePosition="top"
//                                         subtitle={job.currentApplicantEmail}
//                                         actionIcon={
//                                             <div>
//                                                 <FlatButton label="Give Good Review" backgroundColor="#30F57B" primary={true} onClick={(event) => this.goodReview(event, job._id)}/>
//                                                 <FlatButton label="Give Bad Review!" backgroundColor="#F53F30" primary={true} onClick={(event) => this.badReview(event, job._id)}/>
//                                             </div>
//                                         }
//                                     >
//                                     </GridTile>
//                         }
//                         else {
//                             return <span></span>
//                         }
//                     })}
//                 </GridList>
//             </div>

//         )
//     }
// }

export default ConfirmedJobs;