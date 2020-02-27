import React from "react";
import mapboxgl from "mapbox-gl";
import "./index.less";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
const infoZones = [
  { id: 1, nameZone: "Metropolitana Oriente", color: "#33C15D" },
  { id: 2, nameZone: "Metropolitana Centro", color: "#FC3030" },
  { id: 3, nameZone: "Metropolitana Norte", color: "#2869E1" },
  { id: 4, nameZone: "Metropolitano Poniente", color: "#FEBD01" }
];
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});

class MapData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -99.712,
      lat: 19.402,
      zoom: 7.5
    };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const tilesetSource = process.env.REACT_APP_MAPBOX_TILESET_ID;
    const sourceLayer = process.env.REACT_APP_MAPBOX_SOURCE_LAYER;
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      trackResize: true,
      zoom
    });
    map.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken
      }),
      "top-left"
    );
  }
  render() {
    return <div ref={el => (this.mapContainer = el)} style={style} />;
  }
}

export { MapData };
