import React, { Component } from 'react';

class RowInput extends Component {
    render () {
        return (
            <div className="row row--input">
                <div className="row--input__date">B</div>
                <div className="row--input__date">Date</div>
                <div className="row--input__name">QTY</div>
                <div className="row--input__name">Cost Basis</div>
                <div className="row--input__name">Profit/Gain</div>
                <div className="row--input__button">
                    <button onClick={this.props.clicked} className="button">+</button>
                </div>
            </div>
        )
    }
    
}

export default RowInput;