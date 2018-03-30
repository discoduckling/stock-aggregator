import React, { Component } from 'react';
import StockContainer from './StockContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
// import Dialog from 'material-ui/Dialog';
// import FlatButton from 'material-ui/FlatButton';
// import TextField from 'material-ui/TextField';
import AddTickerDialog from './AddTickerDialog';

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
    render () {
        let tickers = null;
        tickers = this.state.stocks.map((stock, i) => <StockContainer data={this.state.stocks[i]} />);
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
                    { modal }
                    {tickers}
                    <div className='content-container-center'>
                            <FloatingActionButton mini={true} onClick={this.addTickerHandler}>
                                <ContentAdd />
                            </FloatingActionButton>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default AllStocksContainer;