import React, { Component } from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';

import ISSContext from '../context/ISSContext.js';

class ISSLocation extends Component {
  componentDidMount() {
    const { fetchISSLocation } = this.context
    fetchISSLocation()
  }

  atualizaLocalizacao() {
    const { fetchISSLocation } = this.context
    fetchISSLocation()
  }

  render() {
    const { latitude, longitude, isLoading } = this.context
    return (
      <div className="map">
        <Map
          center={[0, 0]}
          defaultWidth={450}
          height={450}
          minZoom={1.5}
          maxZoom={8}
          zoom={1.5}
        >
          <Marker anchor={[latitude, longitude]} />
        </Map>
        <h1>{isLoading && 'Carregando...'}</h1>
        <button onClick={() => this.atualizaLocalizacao()}>Atualiza Localizacao</button>
      </div>
    );
  }
}

ISSLocation.contextType = ISSContext;

export default ISSLocation