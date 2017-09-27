import React ,  { Component } from 'react'
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';

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






class RecommededJobs extends Component {
    constructor(){
        super()
        this.state = {
            user_id: this.props.user_id
        }
    }

    renderGridTile = () => {


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
                    {this.props.recommendedJobs.map((job) => ( 
                        { this.state.user_id != job_postedBy ?
                            <GridTile
                                title={job.jobName}
                                titlePosition="top"
                                subtitle={job.postedBy}
                            >
                            </GridTile>

                        }   
                    ))}
                </GridList>
            </div>

        )
    }

}

export default RecommededJobs;