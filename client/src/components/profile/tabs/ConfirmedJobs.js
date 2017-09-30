import React ,  { Component } from 'react'
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import API from '../../../utils/API.js';

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

/*const tilesData = [
    {
        img: 'https://pixy.org/images/placeholder.png',
        title: 'Mow my Law',
        author: 'UCSD',
        featured: true,
    },
    {
        img: 'https://pixy.org/images/placeholder.png',
        title: 'Clean my car',
        author: 'Carlsbad',
    },
    {
        img: 'images/grid-list/camera-813814_640.jpg',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: 'images/grid-list/morning-819362_640.jpg',
        title: 'Morning',
        author: 'fancycrave1',
        featured: true,
    },
    {
        img: 'images/grid-list/hats-829509_640.jpg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: 'images/grid-list/honey-823614_640.jpg',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: 'images/grid-list/vegetables-790022_640.jpg',
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        img: 'images/grid-list/water-plant-821293_640.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
];*/


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

    render(){
        return(
            <div style={styles.root}>
                a
                <GridList
                    cellHeight={60}
                    style={styles.gridList}
                    cols={1}
                    padding={0}
                >
                    {this.state.jobs.map((job) => {
                        if (job.status == "confirmed" ) {
                            return <GridTile
                                        title={job.jobName}
                                        titlePosition="top"
                                        subtitle={job.currentApplicantEmail}
                                        actionIcon={
                                            <div>
                                                <FlatButton label="Give Good Review" backgroundColor="#30F57B" primary={true} onClick={(event) => this.goodReview(event, job._id)}/>
                                                <FlatButton label="Give Bad Review!" backgroundColor="#F53F30" primary={true} onClick={(event) => this.badReview(event, job._id)}/>
                                            </div>
                                        }
                                    >
                                    </GridTile>
                        }
                        else {
                            return <span></span>
                        }
                    })}
                </GridList>
            </div>

        )
    }

}

export default ConfirmedJobs;