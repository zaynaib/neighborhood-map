import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import MyMapComponent from './Container';
//import GoogleApiWrapper from './Loader'
//https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/

class App extends Component {
  render() {
    return (
      <div className="App">
      {/*
      <Header/>
        <Main/>
        */}

        
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCPXkJAt0X8NXKwNEAlHMV4EixIWgKFSdo&callback=initMap"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      </div>
    );
  }
}

export default App;
