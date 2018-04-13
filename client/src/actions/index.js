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
