import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
// import TextField from 'material-ui/TextField';
import TickerAddField from '../components/TickerAddField';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';

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
            // <FlatButton
            //   label="Submit"
            //   primary={true}
            //   keyboardFocused={true}
            //   onClick={() => {this.props.addTicker; this.props.cancelClick}}
            // />,
        ];
        return (
            <Dialog
                contentStyle={{ maxWidth: '50rem', width: '90%' }}
                title="Add new ticker"
                actions={actions}
                modal={false}
                open={this.state.modalOpen}
                onRequestClose={this.cancelAddHandler}
            >
                {/* <TextField
                    onChange={(e, ticker) => this.onDialogChange(ticker)}
                    hintText="AAPL"
                    errorText="Required"
                /> */}
                <form
                    // onSubmit={this.props.handleSubmit(this.props.addTicker, () => this.props.cancelClick())}
                    onSubmit={this.props.handleSubmit(this.props.addTicker)}
                >
                    <Field
                        type='text'
                        name='ticker'
                        component={TickerAddField}
                    />
                </form>
            </Dialog>
        )
    }
}

const validate = (values) => {
    const errors = {};
    if (!values.ticker) {
        errors.ticker = 'You must provide a valid symbol'
    }

    return errors;
}

export default connect(null, actions)(reduxForm({
    validate,
    form: 'add-ticker'
})(AddTickerDialog));