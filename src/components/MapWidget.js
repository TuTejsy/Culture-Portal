import React from "react"

export default class MapWidget extends React.Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this)
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      { zoom: 10,
        center: {
          lat: +this.props.author.mapInfo[0].latitude,
          lng: +this.props.author.mapInfo[0].longitude,
        }});
    this.renderMarkers(map);
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

  renderMarkers(gMap){
    this.props.author.mapInfo.map((coords) => {
      const marker = new window.google.maps.Marker({
        position: { lat: +coords.latitude, lng: +coords.longitude },
        map: gMap,
        title: coords.point,
        zIndex: +coords.zIndex
      });
    })
  }

  render() {
    return (
      <div style={{ width: '100%', height: '480px' }} id={this.props.id} />
    );
  }
}
/*
onMapLoad={map => {
  const marker = new window.google.maps.Marker({
    position: { lat: 41.0082, lng: 28.9784 },
    map: map,
    title: 'Hello Istanbul!'
  });
}}*/
