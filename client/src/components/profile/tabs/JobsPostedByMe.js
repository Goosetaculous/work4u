import React ,  { Component } from 'react'
import API from '../../../utils/API.js';
import PopulateCards from '../../shared/3buttoncards';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 1000,
        overflowY: 'auto',
    },
};

class JobsPostedByMe extends Component {

    state = {jobs: []};

    constructor(){
        super()
    }

    componentDidMount() {
        //fetch("/job/all").then(res => res.json()).then(jobs => this.setState({jobs}));
        this.getJobs()
    }

    getJobs(){
        API.findJobsByPosterId(localStorage.getItem('db_id')).then((res) => {
            console.log("Data from findJobsByPoesterId: ");
            console.log(res);
            this.setState({jobs: res.data});
        });

    }

    removeJobByIdAndRemoveApplicationById = (event, jobId, applicanttId) => {
        console.log("Trying to stop posting.");
        console.log(jobId);
        API.removeJobByIdAndRemoveApplicationById(jobId, applicanttId).then((res) => {
            alert("job with id " + jobId + " was removed");
        });
        window.location.reload();
    };

    removeOnlyJobById = (event, jobId) => {
        console.log("Trying to stop posting.");
        console.log(jobId);
        API.removeOnlyJobById(jobId).then((res) => {
            alert("job with id " + jobId + " was removed");
        });
        window.location.reload();
    };

    confirmJobById = (event, jobId) => {
        console.log("Trying to set below job confirmed.");
        console.log(jobId);
        API.confirmJobById(jobId).then((res) => {
            alert("job with id " + jobId + " was confirmed");
        });
        window.location.reload();
    };

    declineApplicantById = (event, jobId, applicantId) => {
        console.log("declining a job.");
        console.log(applicantId);
        API.declineApplicantById(jobId, applicantId).then((res) => {
            this.getJobs()
        });
    }

    render(){
        return(
            <div style={styles.root}>
                {/*<GridList*/}
                    {/*cellHeight={180}*/}
                    {/*style={styles.gridList}*/}
                    {/*cols={4}*/}
                    {/*padding={3}*/}
                {/*>*/}
                    <PopulateCards
                        jobs={this.state.jobs}
                        removeJobByIdAndRemoveApplicationById={this.removeJobByIdAndRemoveApplicationById}
                        removeOnlyJobById={this.removeOnlyJobById}
                        confirmJobById={this.confirmJobById}
                        declineApplicantById={this.declineApplicantById}


                    />

                    {/*{this.state.jobs.map((job) => {*/}
                       {/**/}

                        {/*if (job.status == "applied" ) {*/}
                            {/*return <GridTile*/}
                                        {/*title={job.jobName}*/}
                                        {/*titlePosition="top"*/}
                                        {/*subtitle={job.location}*/}
                                        {/*actionIcon={*/}
                                            {/*<div>*/}
                                                {/*<FlatButton label="Stop Posting" backgroundColor="#F53F30" primary={true} onClick={(event) => this.removeJobByIdAndRemoveApplicationById(event, job._id, job.appliedBy)}/>*/}
                                                {/*<FlatButton label="Confirm" backgroundColor="#F53F30" primary={true} onClick={(event) => this.confirmJobById(event, job._id)}/>*/}
                                                {/*<FlatButton label="Decline" backgroundColor="#F53F30" primary={true} onClick={(event) => this.declineApplicantById(event, job._id, job.appliedBy)}/>*/}
                                            {/*</div>}*/}
                                    {/*>*/}
                                    {/*</GridTile>*/}
                        {/*}*/}
                        {/*else if (job.status == "initiated") {*/}
                            {/*return <GridTile*/}
                                        {/*title={job.jobName}*/}
                                        {/*titlePosition="top"*/}
                                        {/*subtitle={job.location}*/}
                                        {/*actionIcon={<FlatButton label="Stop Posting" backgroundColor="#F53F30" primary={true} onClick={(event) => this.removeOnlyJobById(event, job._id)}/>}*/}
                                    {/*>*/}
                                    {/*</GridTile>*/}
                        {/*}*/}
                        {/*else {*/}
                            {/*return <div></div>;*/}
                        {/*}*/}
                        {/**/}
                    {/*})}*/}
                {/*</GridList>*/}
            </div>

        )
    }

}

export default JobsPostedByMe;