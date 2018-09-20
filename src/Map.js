import React, { Component } from 'react';
import GoogleApiWrapper from './Loader'
import './App.css';

class Map extends Component {
    render() {
      return (
        <div className="mapReact">
            <GoogleApiWrapper/>

        </div>
      );
    }
  }
  
  export default Map;
  