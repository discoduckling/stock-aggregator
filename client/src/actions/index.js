import { FETCH_USER, FETCH_TICKERS } from './types';
import axios from 'axios';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data })
};

export const fetchTickers = () => async dispatch => {
    const res = await axios.get('/api/tickers');
    dispatch({ type: FETCH_TICKERS, payload: res.data })
};

export const addTicker = (values) => async dispatch => {
    // console.log(values);
    const res = await axios.post('/api/tickers', values);
    dispatch({ type: FETCH_TICKERS, payload: res.data })
};

export const deleteTicker = (ticker_id, ticker_symbol) => async dispatch => {
    console.log(ticker_symbol, ticker_id);
    const res = await axios.delete(`/api/tickers/${ticker_id}`);
    dispatch({ type: FETCH_TICKERS, payload: res.data })
};

export const addPurchase = (values, id) => async dispatch => {
    const res = await axios.post(`/api/tickers/${id}`, values);
    dispatch({ type: FETCH_TICKERS, payload: res.data })
};

export const deletePurchase = (ticker_id, purchase_id) => async dispatch => {
    const res = await axios.delete(`/api/tickers/${ticker_id}/${purchase_id}`);
    dispatch({ type: FETCH_TICKERS, payload: res.data })
};
