import React, { Component } from 'react';
import { Motion, spring, presets } from 'react-motion';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import moment from 'moment';
import * as actions from '../actions';
import { connect } from 'react-redux';

class RowData extends Component  {
    state = {
        show: true,
        id: this.props.id
    }
    onClickHandler = () => {
        // this.props.clicked(this.props.id);
        const id = this.state.id;
        this.props.clicked(id);
        // console.log(this.state.id);
        this.setState({show: false})
    }
    render () {
        const d = new Date(this.props.date);
        // console.log(moment(d).format('DD/MM/YY'));
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
                        <div className="row--data__num">{this.props.num}</div>
                            <div className="row--data__date">{moment(d).format('MM/DD/YY')}</div>
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
                            onClick={() => this.props.deletePurchase(this.props.ticker_id, this.props.id)}/>
                        </div>
                        
                    </div>
                    </MuiThemeProvider>
                )}
            </Motion>
        )
    }
}

export default connect(null, actions)(RowData);