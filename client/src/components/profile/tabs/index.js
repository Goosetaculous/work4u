import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';


import Profile from './Profile'
import AppliedJobs from './AppliedJobs.js';
import RecommendedJobs from './RecommendedJobs.js';
import JobsPostedByMe from './JobsPostedByMe.js';
import ActiveJobs from './ActiveJobs.js';
import Reviews from './Reviews.js'

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};


class ProfileTabs extends Component{

    render(){
        return(
            <Tabs>
                <Tab label="My Skills" >
                    <div>
                       <Profile/>
                    </div>
                </Tab>
                <Tab label="Applied Jobs" >
                    <div>
                        <h2 style={styles.headline}>Applied Jobs</h2>
                        <AppliedJobs />
                    </div>
                </Tab>
                <Tab label="Recommended Jobs" >
                    <div>
                        <h2 style={styles.headline}>Recommended jobs</h2>
                        <RecommendedJobs />
                    </div>
                </Tab>
                <Tab label="Jobs Posted By Me" >
                    <div>
                        <h2 style={styles.headline}>Jobs Posted By Me</h2>
                        <JobsPostedByMe />
                    </div>
                </Tab>
                <Tab label="Active Jobs" >
                    <div>
                        <h2 style={styles.headline}>Active Jobs</h2>
                        <ActiveJobs />
                    </div>
                </Tab>
                <Tab label="Reviews" >
                    <div>
                        <h2 style={styles.headline}>Reviews</h2>
                        <Reviews />
                    </div>
                </Tab>
            </Tabs>
        )
    }
}

export default ProfileTabs