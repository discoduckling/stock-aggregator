import React, { Component } from 'react';
import AllStocksContainer from './AllStocksContainer';
import Header from '../components/Header';
import Landing from '../components/Landing';
import Footer from '../components/Footer';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Landing} />
            <Route exact path='/dashboard' component={AllStocksContainer} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
