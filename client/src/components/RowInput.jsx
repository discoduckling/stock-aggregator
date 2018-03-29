import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
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
        brokerage: 1
    }
    handleChange = (e, index, value) => {
        this.setState({brokerage: value});
    }
    render () {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
            <div className="row row--input">
                <div className="row--input__date">
                </div>
                <div className="row--input__date">
                        <DatePicker 
                        inputStyle={{color: 'white', textAlign: 'center'}}
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
                            paddingBottom: '5px'
                     }} 
                        hinText='test' />
                    
                </div>
                <div className="row--input__name">
                     <TextField 
                        inputStyle={{
                            color: 'white', 
                            textAlign: 'center', 
                            fontSize: '1.5rem',
                            fontFamily: "'Fira Sans', sans-serif",
                            paddingBottom: '5px'
                        }}
                        style={{
                            height: '3rem',
                            width: '60%',
                        }}
                     />
                </div>
                <div className="row--input__name">
                    <TextField 
                        inputStyle={{
                            color: 'white', 
                            textAlign: 'center', 
                            fontSize: '1.5rem',
                            fontFamily: "'Fira Sans', sans-serif",
                            paddingBottom: '5px',
                        }}
                        style={{
                            height: '3rem',
                            width: '60%',
                        }}
                    hinText='Cost Basis' />
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
                        onClick={this.props.clicked}/>
                </div>
            </div>
            </MuiThemeProvider>
        )
    }
    
}

export default RowInput;