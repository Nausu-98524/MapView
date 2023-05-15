import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";


class Map_View extends Component {
  render() {
    // const { google, latitude, longitude } = this.props;
    const delhiCenter = {
      lat: 28.644800,
      lng: 77.216721,
    };
    return (
      <div >
        <Map
          google={this.props.google}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%'
          }}
          zoom={11}
          initialCenter={delhiCenter}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.MAP_KEY ,
})(Map_View);
