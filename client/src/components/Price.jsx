import React from 'react';
// import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';

const price = (props) => {
    return (
        // <div>
            <div className="price">
            <IconButton
                tooltip={`Delete ${props.ticker}`}
                tooltipPosition="top-left"
                onClick={props.delete}
            >
                <i className="material-icons">clear</i>
            </IconButton>

                {/* {props.price} */}
            </div>
    )
}

export default price;