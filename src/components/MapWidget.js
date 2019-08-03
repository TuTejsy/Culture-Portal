import React, { Component, createRef } from "react"

export default class MapWidget extends React.Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this)
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      { zoom: 12,
        center: {
          lat: 53.914643,
          lng: 27.584608,
        }});
    this.props.onMapLoad(map)
  }

  componentDidMount() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = `https://maps.google.com/maps/api/js?key=AIzaSyCG4tHez2c6c2WNOJXlagO5tNHM9ajX5r0`;
    document.body.appendChild(s);
    s.addEventListener('load', e => {
      this.onScriptLoad()
    })
  }

  render() {
    return (
      <div style={{ width: '100%', height: '480px' }} id={this.props.id} />
    );
  }
}