import React, {Component} from 'react';
import {Marker} from 'react-google-maps'
import Map from './Map'
import GoogleApiComponent from 'google-maps-react/dist/GoogleApiComponent';

/*
var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
var mapOptions = {
  zoom: 4,
  center: myLatlng
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var marker = new google.maps.Marker({
    position: myLatlng,
    title:"Hello World!"
});

// To add the marker to the map, call setMap();
marker.setMap(map);
});
*/

export class Marker extends Component {
    render() {
        let markerLat = this.props.lat
        let markerLng = this.props.lng 
        let myLatLng = new google.maps.LatLng(markerLat,markerLng);
        let marker = new google.maps.Marker({
          position: myLatlng,
          title:"Hello World!"
      });
      console.log(marker.title)
  }
  // ...
}