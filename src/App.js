import React, { Component } from 'react';
import './App.css';
import Header from './header_comps/header';
import Name_and_Circles from './body_comps/name_and_circles';
import Greeting from './body_comps/greeting';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Greeting />

        <Name_and_Circles />

        <Header />

      </div>
    );
  }
}


export default App;
