import React, { Component } from 'react';
import './App.css';
import Header from './header_comps/header';
import Name_and_Circles from './body_comps/name_and_circles';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <Name_and_Circles />

      </div>
    );
  }
}


export default App;
