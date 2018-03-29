import React, { Component } from 'react';
import Ticker from '../components/Ticker';
import RowHeader from '../components/RowHeader';
import RowData from '../components/RowData';
import Price from '../components/Price';
import RowInput from '../components/RowInput';

class StockContainer extends Component {
    state = {
        rows: []
    }
    addRowHandler = () => {
        let rows = [...this.state.rows, 'test'];
        this.setState({ rows });
    }
    deleteRowHandler = () => {
        let rows = [...this.state.rows];
        rows.pop();
        console.log(rows);
        this.setState({ rows });
    }
    render () {
        let dataRows = null;
        dataRows = this.state.rows.map(row => <RowData />);
        return (
            <div>
                <div className='content-center stock-container'>
                    <Ticker name='AAPL' />
                    <div>
                        <RowHeader />
                        { dataRows }
                        <RowInput clicked={() => this.addRowHandler()}/>
                    </div>
                    <Price price={50} />
                </div>
                {/* <button onClick={() => this.addRowHandler()}>Add Row</button> */}
            </div>
        );
    }
}

export default StockContainer;