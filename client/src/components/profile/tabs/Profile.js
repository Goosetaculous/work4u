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

    handleCheck(skill) {
        console.log(skill)

        // this.setState(state => ({
        //     checkedValues: state.checkedValues.includes(x)
        //         ? state.checkedValues.filter(c => c !== x)
        //         : [...state.checkedValues, x]
        // }));
    }

    renderCheckbox(skill){
        return(
            <Checkbox
                label={skill}
                onCheck={() => this.handleCheck(skill)}
                style={styles.checkbox}
            />
            )

    }

    render(){
        return(
            <div className="container" style={{width:"80%"}}>
                <div style={styles.block}>
                    <h5>Auto</h5>
                    {
                        AUTO.map((data)=>this.renderCheckbox(data))
                    }
                </div>
                <div style={styles.block}>
                    <h5>HOUSE</h5>
                    {
                        HOUSE.map((data)=>this.renderCheckbox(data))
                    }
                </div>
                <div style={styles.block}>
                    <h5>GENERAL</h5>
                    {
                        GENERAL.map((data)=>this.renderCheckbox(data))
                    }
                </div>
            </div>
        )
    }
}

export default Profile