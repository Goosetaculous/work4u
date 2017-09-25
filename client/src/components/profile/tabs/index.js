import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';


import Profile from './Profile'
import AppliedJobs from './AppliedJobs.js';
import RecommendedJobs from './RecommendedJobs.js';
import JobsPostedByMe from './JobsPostedByMe.js';
import ConfirmedJobs from './ConfirmedJobs.js';
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
        {()=>this.props.testfunction}
    }


    render(){
        {this.props.jobsdata}
        return(
            
            <Tabs>
                <Tab label="My Skills" >
                    <div>
                       <Profile userData={this.props.userData} _f1={this.props.f1} />
                        <FlatButton label="Default" onClick={()=>this.props.f1("TEST")} />
                    </div>
                </Tab>
                <Tab label="Jobs I Applied" >
                    <div>
                        <h2 style={styles.headline}>Jobs I Applied</h2>
                        <AppliedJobs />
                    </div>
                </Tab>
                <Tab label="Look For A Job" >
                    <div>
                        <div>
                            <h2 style={styles.headline}>Look For A Job</h2>
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
                <Tab label="Confirmed Jobs" >
                    <div>
                        <h2 style={styles.headline}>Confirmed Jobs</h2>
                        <ConfirmedJobs />
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