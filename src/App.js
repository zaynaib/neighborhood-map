import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
//import GoogleApiWrapper from './Loader'
//https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
