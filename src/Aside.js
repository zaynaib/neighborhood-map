import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Aside extends Component {
    render() {
      return (
        <nav>
            <h2>Navigation</h2>
            <ul>
                <li>Location 1</li>
                <li>Location 2</li>
                <li>Location 3</li>
            </ul>
        </nav>
      );
    }
  }
  
  export default Aside;