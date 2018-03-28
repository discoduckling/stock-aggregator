import React from 'react';
import { Motion, spring } from 'react-motion';

const rowData= () => {
    return (
        <Motion defaultStyle={{height: 0, opacity: 0}} style={{height: spring(30), opacity: spring(1)}}>
            {(style) => (
                <div 
                    style={{ opacity: style.opacity, height: style.height }}
                    className="row row--data">
                    Data Row
                </div>
            )}
        
        </Motion>
    )
}

export default rowData;