import React, { Component } from 'react'
import Wrapper from '../../shared/content'

import ChipInput from 'material-ui-chip-input'


class Profile extends Component {
    constructor(){
        super()
        this.state = {
            chips: []
        }

    }

    handleRequestAdd (...chips) {
        this.setState({
            chips: [...this.state.chips, ...chips]
        })
    }

    handleRequestDelete (deletedChip) {
        this.setState({
            chips: this.state.chips.filter((c) => c !== deletedChip)
        })
    }




    render(){
        return(
            <div className="container">
                <div style={{width:"80%", textAlign:"center"}}>
                    <h5>Add your skills</h5>
                    <ChipInput

                        fullWidth={false}
                        fullWidthInput={false}
                        onRequestAdd={(chip) => this.handleRequestAdd(chip)}
                        onRequestDelete={(deletedChip) => this.handleRequestDelete(deletedChip)}
                    />
                </div>

            </div>

        )
    }
}

export default Profile