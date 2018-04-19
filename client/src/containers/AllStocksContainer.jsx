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

class AllStocksContainer extends Component {
    state = {
        modalOpen: false
    }
    componentDidMount() {
        this.props.fetchTickers();
    }
    componentWillReceiveProps(nextProps) {
        // console.log('next props', nextProps.tickers);
        // console.log('old props', this.props.tickers);
        // if (nextProps.tickers.length !== this.props.tickers.length) {
            // this.props.fetchTickers();
            // this.forceUpdate()
        // }
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
        let tickers = null;
        if (this.props.tickers) {
            tickers = this.props.tickers.map(ticker => {
                return <StockContainer 
                    key={ticker._id}
                    id={ticker._id} 
                    currentPrice={ticker.currentPrice} 
                    purchases={ticker.purchases}
                    symbol={ticker.symbol} />
            })
            
        }
        
        return tickers;
    }
    render () {
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