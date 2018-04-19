// import 'materialize-css/dist/css/materialize.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
// import logger from 'redux-logger';
// import registerServiceWorker from './registerServiceWorker';

// const store = createStore(reducers, applyMiddleware(reduxThunk, logger));
const store = createStore(reducers, applyMiddleware(reduxThunk));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));

// registerServiceWorker();
