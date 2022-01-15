import React from 'react';

import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

import { ReturnComponentType } from '../../types';

const MapFunction = (): ReturnComponentType => (
  <GoogleMap defaultZoom={10} defaultCenter={{ lat: 53.904541, lng: 27.561523 }} />
);

const WrappedMap = withScriptjs(withGoogleMap(MapFunction));

export const Map = (): ReturnComponentType => (
  <div style={{ width: '100vw', height: '100vh' }}>
    <WrappedMap
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      googleMapURL={`"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_LOCAL_KEY}"`}
      loadingElement={<div style={{ height: `100%` }} />}
    />
  </div>
);
