import React, {Component} from 'react';
import Map from './Map'

import {GoogleApiWrapper} from 'google-maps-react'
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
        //loop through and makemarkers
        
       
        />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCPXkJAt0X8NXKwNEAlHMV4EixIWgKFSdo"
})(MapContainer)

