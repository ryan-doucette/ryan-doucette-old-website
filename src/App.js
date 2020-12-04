import React, { Component } from 'react';
import './App.css';
import Icons from './header_comps/icons';
import NameAndCircles from './body_comps/name_and_circles';
import Greeting from './body_comps/greeting';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ overflowX: 'hidden', width: '100vw' }}>

        <NameAndCircles />

        <Icons />

        <Greeting />

      </div>
    );
  }
}


export default App;
