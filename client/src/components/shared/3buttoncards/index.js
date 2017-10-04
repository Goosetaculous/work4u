import React ,  { Component } from 'react'
import {GridList, GridTile} from 'material-ui/GridList';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

//API
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


class PopulateCards extends Component {
    constructor(){
        super()
        this.state={
            applied: true
        }
    }

    renderCards(job){
        let id = localStorage.getItem("db_id")
        if(job.status==="applied"){
            return(
                <div>
                <FlatButton label="Stop Posting"  secondary={true} onClick={(event)=>this.props.removeJobByIdAndRemoveApplicationById(event, job._id, job.appliedBy)} />
                <FlatButton label="Confirm"  primary={true} onClick={(event)=>this.props.removeJobByIdAndRemoveApplicationById(event, job._id)} />
                <FlatButton label="Decline"  primary={true} onClick={(event) => this.declineApplicantById(event, job._id, job.appliedBy)} />
                </div>
            )
        }else if (job.status==="initiated"){
            return(
                <FlatButton label="Stop Posting" backgroundColor="#F5B030" primary={true} onClick={(event) => this.removeOnlyJobById(event, job._id)}/>
            )

        } else{
            return(<span></span>)
        }



    }





    createCard(job){
        return(
                <Card>
                    <CardHeader
                        title={`${job.currentApplicantName} applied to ${job.jobName}`}
                    />
                    <CardMedia>
                        <img src={`${job.image_url}`} alt="" />
                    </CardMedia>
                    <CardText>
                        {`${job.jobDescription}`}
                    </CardText>
                    <CardActions>
                        {
                            this.renderCards(job)
                        }

                    </CardActions>
                </Card>


        )
    }

    render(){
        return(
            <div style={styles.root}>
                <GridList
                    cellHeight={200}
                    style={styles.gridList}
                    cols={4}
                    padding={3}
                >
                    {this.props.jobs.length > 0? this.props.jobs.map((job) => this.createCard(job) ):<div>No Jobs found</div> }
                </GridList>
            </div>

        )
    }

}

export default PopulateCards