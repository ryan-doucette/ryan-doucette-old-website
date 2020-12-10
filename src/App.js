import React, { Component } from 'react';
import './App.css';
import NameAndCircles from './screen1/nameAndCircles';
import TopScreen from './screen1/topScreen';
import Name from './screen1/name';

class App extends Component {
  render() {
    return (
      <div className="App screenColorChange" style={{ overflowX: 'hidden', width: '100vw' }}>

        {/* class containing the animated circle images and my name */}
        <NameAndCircles />

        {/* class containing the name text and animation */}
        <Name />

        {/* class containing the text and icons on the top screen  */}
        <TopScreen />

      </div>
    );
  }
}

export default App;