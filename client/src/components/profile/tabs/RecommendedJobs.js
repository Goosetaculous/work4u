import React ,  { Component } from 'react'
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import API from '../../../utils/API'


const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        height:'450px'
    },
    gridList: {
        width: 1000,
        overflowY: 'auto',
        padding: '2px'
    },
};




class RecommededJobs extends Component {
    constructor(){
        super()
        this.state={
            applied: true
        }
    }

    applyToJob = (event,job) => {
        console.log("========Apply to Job========")
        
        console.log("job id: " + job._id)
        console.log("user id: " + this.props.user_id)
        API.applyToJob(job._id, this.props.user_id).then((res) =>{
            console.log(res)
          this.props.getRecommendedJobs();
        })
        console.log("=========Apply to Job end=====")
       
    }


  

createCard(job){
        return(
            <Card>

                <CardHeader
                    title={`${job.jobName} in ${job.location}`}
                />
                <CardMedia>
                       
                      <img src={`${job.image_url}`} alt="" />
                </CardMedia>

                <CardText>
                    <div>
                        {job.jobDescription}
                    </div>
                </CardText>
                <CardActions>
                    <FlatButton label="Apply" onClick={(event) => this.applyToJob(event, job)} />
                </CardActions>
            </Card>
        )

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
                    {this.props.recommendedJobs.length > 0? this.props.recommendedJobs.map((job) => this.createCard(job) ):<div>No Jobs found</div> }
                </GridList>
            </div>

        )
    }


    //   render(){
    //     return(
    //         <div style={styles.root}>
    //             <GridList
    //                 cellHeight={180}
    //                 style={styles.gridList}
    //                 cols={4}
    //                 padding={3}
    //             >
    //                 {this.props.recommendedJobs.map((job) => ( 
                        
    //                         <GridTile
    //                             title={job.jobName}
    //                             titlePosition="top"
    //                             subtitle={job.postedBy}
    //                             actionIcon={
    //                                 <FlatButton 
    //                                     label="Apply" 
    //                                     backgroundColor="green" 
    //                                     color="white" 
    //                                     primary={true} 
    //                                     onClick={(event) => this.applyToJob(event, job)}
    //                                 />}                                
    //                         >
    //                         </GridTile>

                        
    //                 ))}
    //             </GridList>
    //         </div>

    //     )
    // }

}




export default RecommededJobs;