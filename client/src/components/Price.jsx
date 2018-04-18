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
            <div className="price--text">
                {props.price}
            </div>
            </div>
    )
}

export default price;