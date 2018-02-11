import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Markdown from './components/markdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <div>
          <Markdown />
        </div>
      </div>
    );
  }
}

export default App;
