import React from 'react';
import TextField from 'material-ui/TextField';

const TickerAddField = ({ input, meta: { error, touched }}) => {
    return (
        <div>
            <TextField
                placeholder= 'AAPL'
                style={{ marginBottom: '10px'}}
                {...input}
            />
            <div style={{ fontSize: '10px', color: 'red' }}>
                {touched && error}
            </div>
        </div>
    )
}

export default TickerAddField;