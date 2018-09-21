import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';

 
class MapContainer extends Component {
  render() {
    const style = {
        width: '100vw',
        height: '100vh'
      }

    if (!this.props.loaded) {
        return <div className="loading">Loading...</div>
      }
    return (
      <Map google={this.props.google} zoom={14}/>
      
    );
  }
}
  
  export default MapContainer;
  