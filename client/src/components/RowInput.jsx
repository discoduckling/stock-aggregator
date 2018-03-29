import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
// import PropTypes from 'prop-types';

const muiTheme = getMuiTheme({
    // textField: {
    //     width: '100%',
    //     height: '3rem'
    // }
  });

  const formatDateText = (date) => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getYear() - 100}`
  }
  
class RowInput extends Component {
    state = {
        date: null,
        qty: '',
        cost: ''
    }

    handleChange = (e, index, value) => {
        this.setState({brokerage: value});
    }
    onDateChange = (date) => {
        this.setState({ date })
    }
    onQtyChange = (qty) => {
        this.setState({ qty })
    }
    onCostChange = (cost) => {
        this.setState({ cost })
    }
    onSubmit = () => {
        // console.log('clicked');
        const sendState = this.state;
        this.props.clicked(sendState);
        this.setState({
            date: null,
            qty: '',
            cost: ''
        });
    }
    render () {
        // console.log(this.state);
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
            <div className="row row--input">
                <div className="row--input__date">
                </div>
                <div className="row--input__date">
                        <DatePicker
                        value={this.state.date} 
                        onChange={(e, date) => this.onDateChange(date)}
                        inputStyle={{color: 'white', textAlign: 'center', top: '-3px'}}
                        style={{
                            height: '3rem',
                            width: '100%',
                        }}
                        formatDate={formatDateText}
                        textFieldStyle={{
                            width: '100%', 
                            height: '3rem' , 
                            fontSize: '1.5rem', 
                            color: 'white', 
                            fontFamily: "'Fira Sans', sans-serif",
                     }} 
                />
                    
                </div>
                <div className="row--input__name">
                     <TextField 
                        value={this.state.qty}
                        onChange={(e, qty) => this.onQtyChange(qty)}
                        id="qty"
                        inputStyle={{
                            color: 'white', 
                            textAlign: 'center', 
                            fontSize: '1.5rem',
                            fontFamily: "'Fira Sans', sans-serif",
                            top: '-3px'
                        }}
                        style={{
                            height: '3rem',
                            width: '60%',
                        }}
                     />
                </div>
                <div className="row--input__name">
                    <TextField 
                        value={this.state.cost}
                        id="cost"
                        onChange={(e, cost) => this.onCostChange(cost)}
                        inputStyle={{
                            color: 'white', 
                            textAlign: 'center', 
                            fontSize: '1.5rem',
                            fontFamily: "'Fira Sans', sans-serif",
                            top: '-3px'
                        }}
                        style={{
                            height: '3rem',
                            width: '60%',
                        }}
                    />
                </div>
                <div className="row--input__name"></div>
                <div className="row--input__button">
                    <FlatButton 
                        labelStyle={{
                            color: 'white',
                            verticalAlign: 'none',
                            height: '3rem',
                            lineHeight: '3rem',
                            textAlign: 'center',
                            padding: '0', 
                            fontSize: '2rem'}}
                        label="+" 
                        style={{height: '3rem', minWidth: '2rem', width: '100%'}} 
                        onClick={this.onSubmit}
                        />
                </div>
            </div>
            </MuiThemeProvider>
        )
    }
    
}

// RowInput.propTypes = {
//     date: PropTypes.instanceOf(Date).isRequired,
//     qty: PropTypes.number.isRequired,
//     cost: PropTypes.number.isRequired
// }

export default RowInput;