import React, { Component } from 'react';
import './App.css';
import NameAndCircles from './body_comps/name_and_circles';
import TopScreen from './body_comps/TopScreen';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ overflowX: 'hidden', width: '100vw' }}>

        <NameAndCircles />

        <TopScreen />

      </div>
    );
  }
}


export default App;
