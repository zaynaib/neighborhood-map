import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import Map from './Map'

import {GoogleApiWrapper} from 'google-maps-react'

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
      <div style={style}>
        {/*Map component*/}
        <Map google={this.props.google}/>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCPXkJAt0X8NXKwNEAlHMV4EixIWgKFSdo"
})(MapContainer)

