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
                        Data Row <button onClick={this.onClickHandler} 
                        style={{ 
                            opacity: style.opacity, 
                            height: style.height * .7, 
                            fontSize: `${.4 * style.height}px`
                        }}>Remove</button>
                    </div>
                )}
            </Motion>
        )
    }
}

export default RowData;