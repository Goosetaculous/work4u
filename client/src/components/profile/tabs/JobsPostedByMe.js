import React ,  { Component } from 'react'
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
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



    constructor(){
        super()
        this.state = {
            jobs:[]
        }
    }

    findJobsByPosterId(){
        API.findJobsByPosterId(localStorage.getItem('db_id')).then((res) => {
            console.log("Data from findJobsByPoesterId: ");
            console.log(res.data[0]);
            this.setState({jobs: res.data});
        });

    }

    componentWillMount() {
        this.findJobsByPosterId()
    }

    componentDidMount(){
        this.findJobsByPosterId()
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
        console.log("Trying to set below job confirmed.");
        console.log(applicantId);
        API.declineApplicantById(jobId, applicantId).then((res) => {
            alert("applicant with id " + applicantId + " was declinde");
        });
        window.location.reload();
    }

    render(){
        return(
            <div style={styles.root}>
                <PopulateCards
                    jobs={this.state.jobs}
                    declineApplicantById={this.declineApplicantById}
                    confirmJobById={this.confirmJobById}
                    removeOnlyJobById={this.removeOnlyJobById}
                    removeJobByIdAndRemoveApplicationById={ this.removeJobByIdAndRemoveApplicationById}
                    findJobsByPosterId={this.findJobsByPosterId}
                />
                {/*<GridList*/}
                    {/*cellHeight={60}*/}
                    {/*style={styles.gridList}*/}
                    {/*cols={1}*/}
                    {/*padding={0}*/}
                {/*>*/}
                    {/*{this.state.jobs.map((job) => {*/}
                        {/*if (job.status == "applied" ) {*/}
                            {/*return <GridTile*/}
                                        {/*title={job.jobName}*/}
                                        {/*titlePosition="top"*/}
                                        {/*subtitle={job.currentApplicantName}*/}
                                        {/*actionIcon={*/}
                                            {/*<div>*/}
                                            {/*</div>}*/}
                                    {/*>*/}
                                    {/*</GridTile>*/}
                        {/*}*/}
                        {/*else if (job.status == "initiated") {*/}
                            {/*return <GridTile*/}
                                        {/*title={job.jobName}*/}
                                        {/*titlePosition="top"*/}
                                        {/*subtitle="No applicant"*/}
                                        {/*actionIcon={<FlatButton label="Stop Posting" backgroundColor="#F5B030" primary={true} onClick={(event) => this.removeOnlyJobById(event, job._id)}/>}*/}
                                    {/*>*/}
                                    {/*</GridTile>*/}
                        {/*}*/}
                        {/*else {*/}
                            {/*return <span></span>;*/}
                        {/*}*/}
                        {/**/}
                    {/*})}*/}
                {/*</GridList>*/}
            </div>

        )
    }

}

export default JobsPostedByMe;