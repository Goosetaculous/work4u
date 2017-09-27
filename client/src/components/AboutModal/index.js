
import React , { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

// import private css
import "./style.css";

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
class AboutModal extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="X"
        primary={true}
        onClick={this.handleClose}
      />
    ];

    return (
      <div>
        <RaisedButton label="Modal Dialog" onClick={this.handleOpen} />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          Stuff for User Guidance/Call of Actions
          -Blah
          -Blah
          -Blah
        </Dialog>
      </div>
    );
  }
}

export default  AboutModal