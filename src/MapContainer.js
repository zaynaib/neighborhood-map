import React, {Component} from 'react';
//import Map from './Map'

import {GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import Map from './Map';
import Marker from './Marker';

export class MapContainer extends Component {
  render() {
    //important so the map will not collapse to zero
    const style ={
      width:'100wh',
      height:'100%'
    }
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div >
        {/*Map component*/}
        <Map style={style} google={this.props.google}
          //initialCenter = {{ lat: 39.648209, lng: -75.711185 }}
        />
        <Marker lat={this.lat} lng={this.lng} />
      <Map/>
       
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCPXkJAt0X8NXKwNEAlHMV4EixIWgKFSdo"
})(MapContainer)

