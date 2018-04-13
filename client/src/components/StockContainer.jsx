import React, { Component } from 'react';
import Ticker from './Ticker';
import RowHeader from './RowHeader';
import RowInput from '../containers/RowInput';
import Price from './Price';
class StockContainer extends Component {
    state = {
        ticker: this.props.data.symbol,
        currentPrice: this.props.data.currentPrice,
        rows: this.props.data.purchases
    }

    renderDataRows = () => {
        let dataRows = null;
    }
    render() {
        return (
            <div>
                <div className='content-center stock-container'>
                    <Ticker name={this.state.ticker} />
                    <div>
                        <RowHeader />
                        { this.renderDataRows() }
                        <RowInput clicked={null}/>
                    </div>
                    <Price price={null} />
                </div>
            </div>
        );
    }
    
};

export default StockContainer;