import React, { Component } from 'react';
import AllStocksContainer from './containers/AllStocksContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <AllStocksContainer />
        <a href="/auth/google">Log in with Google</a>
      </div>
    );
  }
}

export default App;
