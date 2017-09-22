import React, { Component } from 'react'
import Wrapper from '../../shared/content'

//import ChipInput from 'material-ui-chip-input'
import Checkbox from 'material-ui/Checkbox';

// import Routes/API
import API from '../../../utils/API'




const AUTO = ['Mechanical','Electrical','Body Work','Installation']
const HOUSE = ['Construction','Plumping','Electrical','Maintenance']
const GENERAL = ['Moving','Nanny','Modeling','Event','Adult']

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
            checkedValues: []
        }

    }


<<<<<<< HEAD
=======
    importSkillArray(){
        let user_id = localStorage.getItem("user_id");
        let skillarray = this.state.checkedValues;

        const skillObject = {
            "user_id": user_id,
            "skillarray": skillarray
        }

        console.log("===================")
        console.log(skillObject);
        console.log("===================")

        API.addSkillArray(skillObject);
    }

>>>>>>> 9637d725cc582befdc0f4c336107e7a2072e1b41
    handleCheck(skill,TYPE) {
        let checkedSkill =  `${skill}-${TYPE}`

        this.setState(state => ({
            checkedValues: state.checkedValues.includes(checkedSkill)
                ? this.state.checkedValues.filter(c => c !== checkedSkill)
                : [...state.checkedValues, checkedSkill]
        }));

<<<<<<< HEAD
=======
        

>>>>>>> 9637d725cc582befdc0f4c336107e7a2072e1b41
    }

    renderCheckbox(skill,TYPE){

        return(

            <Checkbox
                label={skill}
                key={`${TYPE}${skill}`}
                onCheck={() => this.handleCheck(skill,TYPE)}

                style={styles.checkbox}
            />
            )

    }

    render(){
        return(
            <div className="container" style={{width:"80%"}}>
                {this.importSkillArray()}
              
                <div style={styles.block}>
                    <h5>Auto</h5>
                    {
                        AUTO.map((data,index)=>this.renderCheckbox(data,"AUTO"))
                    }
                </div>
                <div style={styles.block}>
                    <h5>HOUSE</h5>
                    {
                        HOUSE.map((data,index)=>this.renderCheckbox(data,"HOUSE"))
                    }
                </div>
                <div style={styles.block}>
                    <h5>GENERAL</h5>
                    {
                        GENERAL.map((data,index)=>this.renderCheckbox(data,"GENERAL"))
                    }
                </div>
            </div>
        )
    }
}

export default Profile