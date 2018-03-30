import React, { Component } from 'react';
import Ticker from '../components/Ticker';
import RowHeader from '../components/RowHeader';
import RowData from './RowData';
import Price from '../components/Price';
import RowInput from './RowInput';

class StockContainer extends Component {
    state = {
        rows: []
    }
    addRowHandler = (sentRow) => {
        const key = this.state.rows.length;
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
        // console.log(sentRow);
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

    render () {
        let dataRows = null;
        dataRows = this.state.rows.map((row, i) => <RowData 
            key={i}
            num={i}
            id={`${this.convertDate(row.date)}.${row.qty}`}
            date={this.convertDate(row.date)} 
            qty={row.qty} 
            cost={row.cost} 
            profit={0}
            clicked={(id) => this.deleteRowHandler(id)}
            />
        );
        console.log(this.state.rows)
        return (
            <div>
                <div className='content-center stock-container'>
                    <Ticker name='AAPL' />
                    <div>
                        <RowHeader />
                        { dataRows }
                        <RowInput clicked={(sendState) => this.addRowHandler(sendState)}/>
                    </div>
                    <Price price={50} />
                </div>
            </div>
        );
    }
}

export default StockContainer;