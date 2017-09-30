import React, { Component } from 'react'
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import UnCheckedIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank';
import CheckedIcon from 'material-ui/svg-icons/toggle/check-box'

const SKILLS = ['Electric','Plumbing','Gardening','Automotive','Moving']

const styles = {
    block: {
        fontWeight: "bold",
        width: "100%",
        textAlign: "center",

    },
    checkbox: {
        marginBottom: 16,
        color: '#616161',
        position: "relative"

    },
    FlatButton: {
        backgroundColor: '#E0E0E0',
        color: '#616161',
        border: "1px solid #616161",
        borderRadius: 10,
        verticalAlign: 'center'
    }
};

class Profile extends Component {
    constructor(){
        super()
        this.state = {
            user_id: localStorage.getItem("user_id"),
            checkedValues: []
        }
    }

    componentWillReceiveProps(nextProps){
        nextProps.skills.length > 0 ?
        this.setState({
            checkedValues: nextProps.skills
        }):null
    }

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
                defaultChecked={this.state.checkedValues.includes(skill)}
                style={styles.checkbox}
                uncheckedIcon={<UnCheckedIcon style={{fill: "#9CCC65"}} />}
                checkedIcon={<CheckedIcon style={{fill: "#9CCC65"}} />}
            />
            )
    }

    handleSave(){
        this.props.API.addSkillArray({
            user_id : this.props._id,
            skillarray: this.state.checkedValues
        })
        this.props.setSkills(this.state.checkedValues)
    }

    render(){
        return(
            <div className="container" style={{width:"33%"}}>
                <div style={styles.block}>
                    <h5 style={{fontWeight:"bolder"}}>Select the job types you are interested in :</h5>
                    {
                        SKILLS.map((data,index)=>this.renderCheckbox(data))
                    }
                    <FlatButton
                        style={styles.FlatButton}
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