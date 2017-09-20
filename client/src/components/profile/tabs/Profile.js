import React, { Component } from 'react'
import Wrapper from '../../shared/content'

//import ChipInput from 'material-ui-chip-input'

import Checkbox from 'material-ui/Checkbox';

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
    handleCheck(skill) {
        console.log(skill)

        // this.setState(state => ({
        //     checkedValues: state.checkedValues.includes(x)
        //         ? state.checkedValues.filter(c => c !== x)
        //         : [...state.checkedValues, x]
        // }));
=======
    handleCheck(skill,TYPE) {
        let checkedSkill =  `${skill}-${TYPE}`
        this.setState(state => ({
            checkedValues: state.checkedValues.includes(checkedSkill)
                ? state.checkedValues.filter(c => c !== checkedSkill)
                : [...state.checkedValues, checkedSkill]
        }));
>>>>>>> e9c38a39634cc61941e4bc86ab2c580b9f89b2d0
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
                {console.log(this.state.checkedValues)}
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