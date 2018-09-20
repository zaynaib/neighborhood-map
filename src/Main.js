import React, { Component } from 'react';
import './App.css';
import SideBar from './Aside';
import Header from './Header';
import Map from './Map';

class Main extends Component {
    render() {
      return (
        <main>
          <SideBar/>
          <Map/>

        </main>
      );
    }
  }
  
  export default Main;
  