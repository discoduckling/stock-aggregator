import React, { Component } from 'react';
import StockContainer from './containers/StockContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <StockContainer />
      </div>
    );
  }
}

export default App;
