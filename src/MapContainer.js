import React, {Component} from 'react';
//import Map from './Map'

import {GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react'
//map data

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
          initialCenter = {{ lat: 39.648209, lng: -75.711185 }}
          <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 37.778519, lng: -122.405640}} />

        //loop through and makemarkers
        />

       
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCPXkJAt0X8NXKwNEAlHMV4EixIWgKFSdo"
})(MapContainer)

