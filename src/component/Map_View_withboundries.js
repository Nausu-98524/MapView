import React, { Component } from "react";
import { Map, GoogleApiWrapper, Rectangle } from "google-maps-react";


class Map_View_withboundries extends Component {
  render() {
    const { google } = this.props;

    const delhiBounds = {
      north: 28.9,
      south: 28.3,
      east: 77.4,
      west: 76.8,
    };
    
    return (
      <Map
        google={google}
        zoom={10}
        style={{ width: '100%', height: '100%' }}
        initialCenter={{
          lat: 28.7041,
          lng: 77.1025,
        }}
      >
        <Rectangle
          bounds={delhiBounds}
          strokeColor="#000000"
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor="#000000"
          fillOpacity={0.35}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.MAP_KEY,
})(Map_View_withboundries);
