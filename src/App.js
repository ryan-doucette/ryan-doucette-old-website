import React, { Component } from 'react';
import './App.css';
import NameAndCircles from './screen1/nameAndCircles';
import TopScreen from './screen1/topScreen';
import Name from './screen1/name';
import NavDropdown from '/Users/ryandoucette/Documents/personal-website/src/NavDropdown.js'
import '/Users/ryandoucette/Documents/personal-website/src/border.css';
import Screen2 from '/Users/ryandoucette/Documents/personal-website/src/screen2/Screen2.js'
import Screen3 from '/Users/ryandoucette/Documents/personal-website/src/screen3/Screen3.js'

class App extends Component {
  render() {

    return (
      <div className="App" style={{ overflowX: 'hidden', width: '100vw' }}>
        {/* First screen containing greeting and index */}
        <div className='screen1' id='Top' style={{ height: '100vh', overflowY: 'hidden' }}>
          {/* class containing the animated circle images and my name */}
          <NameAndCircles />
          {/* class containing the name text and animation */}
          <Name />
          {/* class containing the text and icons on the top screen  */}
          <TopScreen />
        </div>
        {/* Second screen containing about me information */}
        <div className='screen2' id='About Me' style={{ height: '100vh', overflowY: 'hidden' }}>
          {/* All content for screen two within this class */}
          <Screen2 />
        </div>
        <div className='screen3 border' id='Projects' style={{ height: '100vh' }}>
          <Screen3 />
        </div>
        <div className='screen4 border' id='Work' style={{ height: '100vh' }}>
        </div>
        <NavDropdown />
      </div >
    );
  }
}

export default App;