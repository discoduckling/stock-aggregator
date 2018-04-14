import React, { Component } from 'react';
import Ticker from './Ticker';
import RowHeader from './RowHeader';
import RowInput from '../containers/RowInput';
import Price from './Price';
import RowData from '../containers/RowData';

class StockContainer extends Component {
    state = {
        ticker: this.props.data.symbol,
        currentPrice: this.props.data.currentPrice,
        rows: this.props.data.purchases,
        id: this.props.data._id
    }

    renderDataRows = () => {
        let dataRows = null;
        if (this.state.rows) {
            dataRows = this.state.rows.map(purchase => <RowData 
                id={purchase.id}
                // num={1}
                date={purchase.date}
                qty={purchase.qty}
                cost={2}
                profit={0}
            />)
        }
        return dataRows;
    }
    render() {
        return (
            <div>
                <div className='content-center stock-container'>
                    <Ticker name={this.state.ticker} />
                    <div>
                        <RowHeader />
                        { this.renderDataRows() }
                        <RowInput id={this.state.id}/>
                    </div>
                    <Price price={null} />
                </div>
            </div>
        );
    }
    
};

export default StockContainer;