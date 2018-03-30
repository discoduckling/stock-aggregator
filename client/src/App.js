import React, { Component } from 'react';
import AllStocksContainer from './containers/AllStocksContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <AllStocksContainer />
      </div>
    );
  }
}

export default App;
