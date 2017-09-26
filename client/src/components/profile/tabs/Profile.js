import React, { Component } from 'react'
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';

// import Routes/API
import API from '../../../utils/API'


const SKILLS = ['Electric','Plumbing','Gardening','Automotive','Moving']

const styles = {
    block: {
        width: "40%",
    },
    checkbox: {
        marginBottom: 16,
    },
};

class Profile extends Component {
    constructor(){
        super()
        this.state = {
            user_id: localStorage.getItem("user_id"),
            checkedValues: []
        }
    }

    componentWillMount(){


    }
    //
    // importSkillArray(){
    //
    //     let skillarray = this.state.checkedValues;
    //
    //     const skillObject = {
    //         user_id: this.state.user_id,
    //         "skillarray": skillarray
    //     }
    //
    //
    //     console.log("Skills from parent ", this.props.skills)
    //     console.log("_id from parent ", this.props._id)
    //
    //     API.addSkillArray(skillObject);
    //     this.props.setSkills(skillObject.skillarray)
    // }

    handleCheck(skill) {
        let checkedSkill =  `${skill}`
        this.setState(state => ({
            checkedValues: state.checkedValues.includes(checkedSkill)
                ? this.state.checkedValues.filter(c => c !== checkedSkill)
                : [...state.checkedValues, checkedSkill]
        }));

    }

    renderCheckbox(skill){
        return(
            <Checkbox
                label={skill}
                key={`${skill}`}
                onCheck={() => this.handleCheck(skill)}
                defaultChecked={this.props.skills.includes(skill)? true: false}
                style={styles.checkbox}
            />
            )
    }

    handleSave(){
        console.log("HANDLE SAVE")
        API.addSkillArray({
            user_id : this.props._id,
            skillarray: this.state.checkedValues
        })
        this.props.setSkills(this.state.checkedValues)
    }

    render(){
        return(
            <div className="container" style={{width:"80%"}}>

                <div style={styles.block}>
                    {/*<FlatButton label={"profile.js"} onClick={this.props._f1}/>*/}
                    <h5>Select the job types you are interested in</h5>
                    {
                        SKILLS.map((data,index)=>this.renderCheckbox(data))
                    }
                    <FlatButton
                        label={"Save"}
                        primary={true}
                        onClick={()=>this.handleSave()}
                    />
                </div>

            </div>
        )
    }
}

export default Profile