import React from "react"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"
import './styles/map.css'

class MapWidget extends React.Component {
  /*  constructor(props) {
    super(props);
  }*/
  render() {
    return (
      <div className="map-container">
        <Map
          google={this.props.google}
          zoom={12}
          initialCenter={{ lat: 53.914643, lng: 27.584608 }}
        >
          <Marker position={{ lat: 53.872585, lng: 27.53027 }} />
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCG4tHez2c6c2WNOJXlagO5tNHM9ajX5r0",
})(MapWidget)
