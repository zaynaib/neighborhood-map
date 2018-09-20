import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SideBar from './Aside';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <SideBar />
      </div>
    );
  }
}

export default App;
