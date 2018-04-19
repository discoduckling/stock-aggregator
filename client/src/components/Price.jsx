import React from 'react';
import IconButton from 'material-ui/IconButton';

const price = (props) => {
    return (
            <div className="price">
                <IconButton
                    tooltip={`Delete ${props.ticker}`}
                    tooltipPosition="top-left"
                    onClick={props.delete}
                    style={{ width: '39px'}}
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