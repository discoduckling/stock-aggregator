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
    state = {
        id: this.props.data._id
    }
    componentDidMount() {
        this.props.fetchTickers();
    }

    renderDataRows = () => {
        let dataRows = null;
        if (this.props.rows) {
            dataRows = this.props.rows.map(purchase => <RowData 
                ticker_id={this.state.id}
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
                    <Ticker name={this.props.ticker} />
                    <div>
                        <RowHeader />
                        { this.renderDataRows() }
                        <RowInput id={this.props.data._id}/>
                    </div>
                    <Price 
                        price={calculateTotalProfit(this.props.rows, this.props.currentPrice)} 
                        ticker={this.props.ticker}
                        ticker_id={this.state.id}
                        delete={() => this.props.deleteTicker(this.state.id, this.props.ticker)}
                    />
                </div>
            </div>
        );
    }
    
};

const mapStateToProps = (state, ownProps) => {
    const stock = state.tickers.filter(ticker => ticker._id === ownProps.data._id)[0];
    return {
        ticker: stock.symbol,
        currentPrice: stock.currentPrice,
        rows: stock.purchases,
    }
}
export default connect(mapStateToProps, actions)(StockContainer);