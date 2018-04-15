import React, { Component } from 'react';
import Ticker from './Ticker';
import RowHeader from './RowHeader';
import RowInput from '../containers/RowInput';
import Price from './Price';
import RowData from '../containers/RowData';
import * as actions from '../actions';
import { connect } from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class StockContainer extends Component {
    state = {
        id: this.props.data._id
    }
    componentDidMount() {
        this.props.fetchTickers();
    }
    // componentWillReceiveProps(nextProps) {
    //     // console.log('updating');
    //     this.props.fetchTickers();
    // }
    // componentWillReceiveProps(nextProps) {
    //     // console.log('now', this.props.data.purchases);
    //     // console.log('next', nextProps.data.purchases);
    //     if (nextProps.data.purchases.length !== this.props.data.purchases.length) {
    //         this.props.fetchTickers();
    //     }
    // }
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
                profit={0}
            />)
        }
        return dataRows;
    }
    render() {
        // console.log(this.props);
        return (
            <div>
                {/* <div className='content-container-center'>
                    <FloatingActionButton mini={true}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div> */}
                <div className='content-center stock-container'>
                    <Ticker name={this.props.ticker} />
                    <div>
                        <RowHeader />
                        { this.renderDataRows() }
                        <RowInput id={this.props.data._id}/>
                    </div>
                    <Price 
                        price={null} 
                        ticker={this.props.ticker}
                        // delete={() => console.log(`delete ${this.props.ticker}`)}
                        delete={() => this.props.deleteTicker(this.state.id)}
                    />
                </div>
            </div>
        );
    }
    
};

const mapStateToProps = (state, ownProps) => {
    const stock = state.tickers.filter(ticker => ticker._id == ownProps.data._id)[0];
    return {
        ticker: stock.symbol,
        currentPrice: stock.currentPrice,
        rows: stock.purchases,
    }
}
export default connect(mapStateToProps, actions)(StockContainer);