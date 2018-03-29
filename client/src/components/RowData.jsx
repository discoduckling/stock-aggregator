import React, { Component } from 'react';
import { Motion, spring, presets } from 'react-motion';

class RowData extends Component  {
    state = {
        show: true
    }
    onClickHandler = () => {
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
                    <div 
                        style={{ 
                            opacity: style.opacity, 
                            height: style.height,
                            fontSize: `${.3 * style.height}px`
                             
                        }}
                        className="row row--data">
                        <div className="row--data__date">B</div>
                        <div className="row--data__date">Date</div>
                        <div className="row--data__name">QTY</div>
                        <div className="row--data__name">Cost Basis</div>
                        <div className="row--data__name">Profit/Gain</div>
                        <div className="row--data__button">
                            <button 
                                className="button"
                                onClick={this.onClickHandler}
                                style={{
                                    opacity: style.opacity,
                                    height: style.height * .7,
                                    fontSize: `${.4 * style.height}px`
                                }}>X</button>
                        </div>
                        
                    </div>
                )}
            </Motion>
        )
    }
}

export default RowData;