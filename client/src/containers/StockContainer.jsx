import React, { Component } from 'react';
import Ticker from '../components/Ticker';
import RowHeader from '../components/RowHeader';
import RowData from './RowData';
import Price from '../components/Price';
import RowInput from './RowInput';


class StockContainer extends Component {
    state = {
        ticker: 'AAPL',
        currentPrice: 167.78,
        rows: []
    }
    addRowHandler = (sentRow) => {
        const id = `${this.convertDate(sentRow.date)}.${sentRow.qty}`;
        let rows = [...this.state.rows,
            {
                date: sentRow.date,
                qty: sentRow.qty,
                cost: sentRow.cost,
                id: id,
                active: true
            }
        ]
        this.setState({ rows });
    }
    deleteRowHandler = (id) => {
        let rows = [...this.state.rows];
        const row = rows.filter(row => row.id === id)[0];
        row.active = false;
        this.setState({ rows: rows });
    }
    convertDate = (date) => {
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getYear() - 100}`
    };
    calculateProfit = (qty, cost) => {
        return (qty * (this.state.currentPrice - cost)).toFixed(2);
    }
    calculateTotalProfit = () => {
        let activeRows = [...this.state.rows].filter(row => row.active);
        activeRows = activeRows.map(row => Number(this.calculateProfit(row.qty, row.cost)));
        const totalProfit = activeRows.reduce((a,b) => a + b, 0);
        // console.log(totalProfit);
        return totalProfit;
    }
    render () {
        let dataRows = null;
        dataRows = this.state.rows.map((row, i) => <RowData 
            key={i}
            num={i}
            id={`${this.convertDate(row.date)}.${row.qty}`}
            date={this.convertDate(row.date)} 
            qty={row.qty} 
            cost={row.cost} 
            profit={this.calculateProfit(row.qty, row.cost)}
            clicked={(id) => this.deleteRowHandler(id)}
            />
        );
        this.calculateTotalProfit();
        return (
            <div>
                <div className='content-center stock-container'>
                    <Ticker name={this.state.ticker} />
                    <div>
                        <RowHeader />
                        { dataRows }
                        <RowInput clicked={(sendState) => this.addRowHandler(sendState)}/>
                    </div>
                    <Price price={this.calculateTotalProfit()} />
                </div>
            </div>
        );
    }
}

export default StockContainer;