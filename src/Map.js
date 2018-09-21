import React, {Component} from 'react';
import ReactDOM from 'react-dom'

//https://www.npmjs.com/package/google-maps-react#marker
//https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/
//https://www.youtube.com/watch?v=9t1xxypdkrE&feature=youtu.be
 // (:40)
/*
TO DO: Make Marker Component
To Do Make InfoWindow Componenet

*/


class Map extends Component {
    
    state ={
        initialCenter:{
            lat: 37.774929,
            lng:-122.419416
        }
    }    
    componentDidMount() {
        
        this.loadMap();
      }

      

      loadMap() {
        if (this.props && this.props.google) {
            // google is available
            const {google} = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);

            let zoom = 14;
            let {lat,lng} = this.state.initialCenter
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
              center: center,
              zoom: zoom
            })
            this.map = new maps.Map(node, mapConfig);
      
          }
      }
    
    
    render() {
        const style ={
            width:'100wh',
            height:'100vh',
            position:'static'
          }
          console.log(this.props.google)
          console.log(this.props.initialCenter)

      return (
        <div style={style} ref='map'>
          Loading map from Map component...
        </div>
      )
    }
  }

  export default Map