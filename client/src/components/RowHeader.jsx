import React from 'react';

const rowHeader = () => {
    return (
        <div className="row row--header">
            <div className="row--header__date">&nbsp;</div>
            <div className="row--header__date">Date</div>
            <div className="row--header__name">QTY</div>
            <div className="row--header__name">Cost Basis</div>
            <div className="row--header__name">Profit/Gain</div>
            <div className="row--header__button">&nbsp;</div>
        </div>
    ) 
}

export default rowHeader;