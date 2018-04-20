import React, { Component } from 'react';
import Ticker from './Ticker';
import RowHeader from './RowHeader';
import RowInput from '../containers/RowInput';
import Price from './Price';
import RowData from '../containers/RowData';
import * as actions from '../actions';
import { connect } from 'react-redux';

const calculateProfit = (qty, cost, currentPrice) => {
    return qty * (currentPrice - cost);
};

const calculateTotalProfit = (purchases, currentPrice) => {
    var total = 0;
    for (var i = 0; i < purchases.length; i++) {
        total += calculateProfit(purchases[i].qty, purchases[i].cost, currentPrice);
    };
    return total.toFixed(2);
}

class StockContainer extends Component {
    componentDidMount() {
        this.props.fetchTickers();
    }

    renderDataRows = () => {
        let dataRows = null;
        if (this.props.purchases) {
            dataRows = this.props.purchases.map(purchase => <RowData
                key={purchase._id}
                ticker_id={this.props.id}
                id={purchase._id}
                // num={1}
                date={purchase.date}
                qty={purchase.qty}
                cost={purchase.cost.toFixed(2)}
                profit={calculateProfit(purchase.qty, purchase.cost, this.props.currentPrice).toFixed(2)}
            />)
        }
        return dataRows;
    }

    render() {
        return (
            <div>
                <div className='content-center stock-container'>
                    <Ticker name={this.props.symbol} />
                    <div>
                        <RowHeader />
                        { this.renderDataRows() }
                        <RowInput id={this.props.id} symbol={this.props.symbol}/>
                    </div>
                    <Price 
                        price={calculateTotalProfit(this.props.purchases, this.props.currentPrice)} 
                        ticker={this.props.symbol}
                        ticker_id={this.props.id}
                        delete={() => this.props.deleteTicker(this.props.id)}
                    />
                </div>
            </div>
        );
    }
    
};

// const mapStateToProps = (state, ownProps) => {
//     const stock = state.tickers.filter(ticker => ticker._id === ownProps.data._id)[0];
//     return {
//         ticker: stock.symbol,
//         currentPrice: stock.currentPrice,
//         rows: stock.purchases,
//     }
// }
// export default connect(mapStateToProps, actions)(StockContainer);

export default connect(null, actions)(StockContainer);