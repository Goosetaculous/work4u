import React, { Component } from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';

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
                <Tab label="Profile" >
                    <div>
                        <h2 style={styles.headline}>Profile</h2>
                        <p>
                            This is an example tab.
                        </p>
                        <p>
                            You can put any sort of HTML or react component in here. It even keeps the component state!
                        </p>

                    </div>
                </Tab>
                <Tab label="Applied Jobs" >
                    <div>
                        <h2 style={styles.headline}>Applied Jobs</h2>
                        <p>
                            This is another example tab.
                        </p>
                    </div>
                </Tab>
                <Tab label="Recommended Jobs" >
                    <div>
                        <h2 style={styles.headline}>Recommended jobs</h2>
                        <p>
                            This is another example tab.
                        </p>
                    </div>
                </Tab>
                <Tab label="My Posts" >
                    <div>
                        <h2 style={styles.headline}>My Post</h2>
                        <p>
                            This is another example tab.
                        </p>
                    </div>
                </Tab>
                <Tab label="Active Jobs" >
                    <div>
                        <h2 style={styles.headline}>Active Jobs</h2>
                        <p>
                            This is another example tab.
                        </p>
                    </div>
                </Tab>
                <Tab label="Reviews" >
                    <div>
                        <h2 style={styles.headline}>Reviews</h2>
                        <p>
                            This is another example tab.
                        </p>
                    </div>
                </Tab>
            </Tabs>
        )
    }
}

export default ProfileTabs