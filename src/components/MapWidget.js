import React from "react"
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapWidget extends React.Component{
/*  constructor(props) {
    super(props);
  }*/
  render() {
    const mapStyles = {
      width: '640px',
      height: '480px',
    };
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{ lat: 53.914643, lng: 27.584608}}
      >
        <Marker position={{ lat: 53.872585, lng: 27.530270}} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({apiKey: 'AIzaSyCG4tHez2c6c2WNOJXlagO5tNHM9ajX5r0' })(MapWidget);
