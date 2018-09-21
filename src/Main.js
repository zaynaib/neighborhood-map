import React, { Component } from 'react';
import './App.css';
import SideBar from './Aside';
import Header from './Header';
import SimpleExample from './SimpleExample';

class Main extends Component {
    render() {
      return (
        <main>
          <SideBar/>
          <SimpleExample/>

        </main>
      );
    }
  }
  
  export default Main;
  