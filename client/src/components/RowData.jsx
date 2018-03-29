import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

class RowData extends Component  {
    state = {
        show: true
    }
    onClickHandler = () => {
        this.setState({show: false})
    }
    render () {
        return (
            <Motion defaultStyle={{height: 0, opacity: 1}} style={{height: spring(this.state.show ? 30 : 0), opacity: spring(this.state.show ? 1 : 0)}}>
                {(style) => (
                    <div 
                        style={{ opacity: style.opacity, height: style.height }}
                        className="row row--data">
                        Data Row <button onClick={this.onClickHandler}>Remove</button>
                    </div>
                )}
            </Motion>
        )
    }
}

export default RowData;