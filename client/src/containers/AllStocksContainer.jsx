import React, { Component } from 'react';
import StockContainer from '../components/StockContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
// import Dialog from 'material-ui/Dialog';
// import FlatButton from 'material-ui/FlatButton';
// import TextField from 'material-ui/TextField';
import AddTickerDialog from './AddTickerDialog';
import { connect } from 'react-redux';
import * as actions from '../actions';
// import { reduxForm, Field } from 'redux-form';

class AllStocksContainer extends Component {
    state = {
        stocks: [
            {
                ticker: 'AAPL',
                currentPrice: 167.78,
                rows: []
            },
            {
                ticker: 'F',
                currentPrice: 11.08,
                rows: []
            },
        ],
        modalOpen: false
    }
    componentDidMount() {
        this.props.fetchTickers();
    }
    addTickerHandler = () => {
        this.setState({ modalOpen: true });
    }
    submitTickerHandler = (newTickerSymbol) => {
        const newTicker = {
            ticker: newTickerSymbol.toUpperCase(),
            currentPrice: 0
        }
        const newTickers = [...this.state.stocks, newTicker]
        this.setState({ stocks: newTickers, modalOpen: false });
    }
    cancelAddHandler = () => {
        this.setState({ modalOpen: false });
    }
    renderTickers = () => {
        // console.log(this.props.tickers);
        let tickers = null;
        if (this.props.tickers) {
            tickers = this.props.tickers.map(ticker => <StockContainer data={ticker} />)
        }
        return tickers;
    }
    render () {
        // console.log(this.props.tickers);
        // let tickers = null;
        // tickers = this.state.stocks.map((stock, i) => <StockContainer data={this.state.stocks[i]} />);
        let modal = null;
        if (this.state.modalOpen) {
            modal = <AddTickerDialog 
                        modalOpen={this.state.modalOpen}
                        cancelClick={this.cancelAddHandler}
                        submitClick={(newTicker) => this.submitTickerHandler(newTicker)} />
        }
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        { modal }
                        {/* {tickers} */}
                        {this.renderTickers()}
                        <div className='content-container-center'>
                            <FloatingActionButton mini={true} onClick={() => this.setState({ modalOpen: true })}>
                                <ContentAdd />
                            </FloatingActionButton>
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tickers: state.tickers
    }
}
export default connect(mapStateToProps, actions)(AllStocksContainer);