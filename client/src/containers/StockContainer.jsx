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
        let rows = [...this.state.rows,
            {
                date: sentRow.date,
                qty: sentRow.qty,
                cost: sentRow.cost,
                i: key
            }
        ]
        this.setState({ rows });
        // console.log(sentRow);
    }
    deleteRowHandler = (i) => {
        // console.log(i)
        let rows = [...this.state.rows];
        rows.pop();
        // console.log(rows);
        this.setState({ rows });
    }
    convertDate = (date) => {
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getYear() - 100}`
    };

    render () {
        let dataRows = null;
        dataRows = this.state.rows.map((row, i) => <RowData 
            key={i}
            num={i}
            date={this.convertDate(row.date)} 
            qty={row.qty} 
            cost={row.cost} 
            profit={0}
            clicked={(i) => this.deleteRowHandler(i)}
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