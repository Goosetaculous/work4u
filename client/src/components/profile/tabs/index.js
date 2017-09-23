import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';


import Profile from './Profile'
import AppliedJobs from './AppliedJobs.js';
import RecommendedJobs from './RecommendedJobs.js';
import JobsPostedByMe from './JobsPostedByMe.js';
import ActiveJobs from './ActiveJobs.js';
import Reviews from './Reviews.js'

// import card from shared
import Cardsv2 from '../../shared/cardsv2'

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};


class ProfileTabs extends Component {

    constructor() {
        super();
        this.state = {
          recommendedCards: {}
        }
    };

    renderRecommendedCards() {
        let recommendedCards = {};

        return this.state.recommendedCards.map(card => (
          <Cardsv2
            job_description={card.job_description} 
            job_title={card.job_title}
          />
        ));
    };

    // test3 = (test3)=>{
    // {this.props.passfunction("p1")}
    yo = () => {
        console.log("FUNCTION CALLED YO")
        this.props.passfunction("p1")
    }


    render(){
        {this.props.jobsdata}
        
        return(
            
            <Tabs>
                <Tab label="My Skills" >
                    <div>
                       <Profile/>
                        <FlatButton label="Default" onClick={this.yo} />
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
                        <div>
                            <h2 style={styles.headline}>Recommended jobs</h2>
                        </div>
                        <div>
                           <RecommendedJobs />
                        </div>
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