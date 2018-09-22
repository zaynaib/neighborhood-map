import React, {Component} from 'react';
import Map from './Map'
import {GoogleApiWrapper} from 'google-maps-react';


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

class Marker extends Component {
    render() {
        //google=this.props.google
        
        let myLatlng = new this.google.maps.LatLng(this.props.lat,this.props.lng);
        let marker = new this.google.maps.Marker({
            position: myLatlng,
            title:"Hello World!"
        });
      console.log(marker)
      
      return(
          <div></div>
      )
  }
  // ...
}

export default Marker;