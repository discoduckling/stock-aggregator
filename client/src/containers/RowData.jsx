import React, { Component } from 'react';
import { Motion, spring, presets } from 'react-motion';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class RowData extends Component  {
    state = {
        show: true
    }
    onClickHandler = () => {
        this.props.clicked();
        this.setState({show: false})
    }
    render () {
        return (
            <Motion 
                defaultStyle={{
                    height: 0, 
                    opacity: 1
                }} 
                style={{
                    height: spring(this.state.show ? 30 : 0, presets.gentle), 
                    opacity: spring(this.state.show ? 1 : 0)
                    }}>
                {(style) => (
                    <MuiThemeProvider>
                    <div 
                        style={{ 
                            opacity: style.opacity, 
                            height: style.height,
                            fontSize: `${.4 * style.height}px`,
                            // lineHeight: style.height
                             
                        }}
                        className="row row--data">
                        <div className="row--data__num">&nbsp;</div>
                        <div className="row--data__date">{this.props.date}</div>
                        <div className="row--data__name">{this.props.qty}</div>
                        <div className="row--data__name">{this.props.cost}</div>
                        <div className="row--data__name">{this.props.profit}</div>
                        <div className="row--data__button">
                            <FlatButton 
                            labelStyle={{
                                color: 'white',
                                verticalAlign: 'none',
                                height: '3rem',
                                lineHeight: '3rem',
                                textAlign: 'center',
                                padding: '0', 
                                fontSize: `${.5  * style.height}px`}}
                            label='&times;'
                            style={{height: '3rem', minWidth: '2rem', width: '100%'}} 
                            onClick={this.onClickHandler}/>
                        </div>
                        
                    </div>
                    </MuiThemeProvider>
                )}
            </Motion>
        )
    }
}

export default RowData;