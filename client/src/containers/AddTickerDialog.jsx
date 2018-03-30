import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class AddTickerDialog extends Component {
    state = {
        newTicker: null,
        modalOpen: this.props.modalOpen
    }
    onDialogChange = (ticker) => {
        this.setState({ newTicker: ticker })
    }
    render () {
        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.props.cancelClick}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              keyboardFocused={true}
              onClick={() => this.props.submitClick(this.state.newTicker)}
            />,
        ];
        return (
            <Dialog
                contentStyle={{ width: '50rem' }}
                title="Add new ticker"
                actions={actions}
                modal={false}
                open={this.state.modalOpen}
                onRequestClose={this.cancelAddHandler}
            >
                <TextField
                    onChange={(e, ticker) => this.onDialogChange(ticker)}
                    hintText="AAPL"
                    errorText="Required"
                />
            </Dialog>
        )
    }
}

export default AddTickerDialog;