import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '95%',
  height: '100%'
};

export class MapContainer extends Component {
    constructor(props) {
        super(props);    
        this.state = { };
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.google !== this.props.google) {
    //         this.loadMap();
    //     }
    //     if (prevState.currentLocation !== this.state.currentLocation) {
    //         this.recenterMap();
    //     }
    // }
    // recenterMap() {
    //     const map = this.map;
    //     const current = this.state.currentLocation;
    
    //     const google = this.props.google;
    //     const maps = google.maps;
    
    //     if (map) {
    //       let center = new maps.LatLng(current.lat, current.lng);
    //       map.panTo(center);
    //     }
    //   }
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: this.props.latitude,
         lng: this.props.longitude
        }} >
        <Marker
            name={'car position'}
            position={{lat: this.props.latitude, lng: this.props.longitude}}
         />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCL8LykrYfie-rTNsi1KJOkF-n-V0yoct0'
})(MapContainer);