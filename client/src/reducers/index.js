import { combineReducers } from 'redux';
import authReducer from './authReducer';
import tickerReducer from './tickerReducer';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
    auth: authReducer,
    tickers: tickerReducer,
    form: reduxForm
});