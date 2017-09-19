import React, { Component } from 'react'
import Wrapper from '../../shared/content'

//import ChipInput from 'material-ui-chip-input'

import Checkbox from 'material-ui/Checkbox';


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
            checked: false
        }

    }

    updateCheck() {
        this.setState((oldState) => {
            return {
                checked: !oldState.checked,
            };
        });
    }



    render(){
        return(
            <div className="container">
                <div style={{width: "30%"}}>
                    <h5>Jobs I can do</h5>
                </div>


                <div style={styles.block}>
                    <h5>Auto</h5>
                    <Checkbox
                        label="Mechanical"
                        checked={this.state.checked}
                        onCheck={this.updateCheck.bind(this)}
                        style={styles.checkbox}
                    />
                    <Checkbox
                        label="Electrical"
                        checked={this.state.checked}
                        onCheck={this.updateCheck.bind(this)}
                        style={styles.checkbox}
                    />
                    <Checkbox
                        label="Body Work"
                        checked={this.state.checked}
                        onCheck={this.updateCheck.bind(this)}
                        style={styles.checkbox}
                    />
                    <Checkbox
                        label="Change a tire"
                        checked={this.state.checked}
                        onCheck={this.updateCheck.bind(this)}
                        style={styles.checkbox}
                    />
                    <Checkbox
                        label="Installation"
                        checked={this.state.checked}
                        onCheck={this.updateCheck.bind(this)}
                        style={styles.checkbox}
                    />
                </div>

                <div style={styles.block}>
                    <h5>House</h5>
                    <Checkbox
                        label="Cleaning"
                        checked={this.state.checked}
                        onCheck={this.updateCheck.bind(this)}
                        style={styles.checkbox}
                    />
                    <Checkbox
                        label="Plumbing"
                        checked={this.state.checked}
                        onCheck={this.updateCheck.bind(this)}
                        style={styles.checkbox}
                    />
                    <Checkbox
                        label="Installation"
                        checked={this.state.checked}
                        onCheck={this.updateCheck.bind(this)}
                        style={styles.checkbox}
                    />
                    <Checkbox
                        label="Maintenance"
                        checked={this.state.checked}
                        onCheck={this.updateCheck.bind(this)}
                        style={styles.checkbox}
                    />

                </div>
                <div style={styles.block}>
                    <h5>General</h5>
                    <Checkbox
                        label="Moving"
                        checked={this.state.checked}
                        onCheck={this.updateCheck.bind(this)}
                        style={styles.checkbox}
                    />
                    <Checkbox
                        label="Nanny"
                        checked={this.state.checked}
                        onCheck={this.updateCheck.bind(this)}
                        style={styles.checkbox}
                    />
                    <Checkbox
                        label="Modeling"
                        checked={this.state.checked}
                        onCheck={this.updateCheck.bind(this)}
                        style={styles.checkbox}
                    />
                    <Checkbox
                        label="Construction"
                        checked={this.state.checked}
                        onCheck={this.updateCheck.bind(this)}
                        style={styles.checkbox}
                    />
                    <Checkbox
                        label="Event"
                        checked={this.state.checked}
                        onCheck={this.updateCheck.bind(this)}
                        style={styles.checkbox}
                    />
                    <Checkbox
                        label="Adult stuff"
                        checked={this.state.checked}
                        onCheck={this.updateCheck.bind(this)}
                        style={styles.checkbox}
                    />
                </div>


            </div>
        )
    }
}

export default Profile