import * as actions from '../actions/types';

export default (state=null, action) => {
    switch(action.type) {
        case actions.FETCH_TICKERS:
            return action.payload;
        default:
            return state;
    }
}