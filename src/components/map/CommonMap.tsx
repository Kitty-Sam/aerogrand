import React, { useCallback, useState } from 'react';

import { useJsApiLoader } from '@react-google-maps/api';

import { ReturnComponentType } from '../../types';
import { Autocomplete } from '../Autocomplete/Autocomplete';

import { Map } from './Map';
import { Navigation } from './Navigation';
import { PanelFields } from './PanelFields';

// @ts-ignore
const API_KEY: string = process.env.REACT_APP_API_KEY;
const defaultCenter = {
  lat: 53.904541,
  lng: 27.561523,
};

export const CommonMap = (): ReturnComponentType => {
  const [center, setCenter] = useState(defaultCenter);

  const onPlaceSelected = useCallback(coordinates => {
    setCenter(coordinates);
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
    libraries: ['places'],
  });
  return (
    <div style={{ display: 'flex' }}>
      <Navigation />
      <PanelFields />

      {isLoaded ? (
        <div>
          <Autocomplete
            isLoaded={isLoaded}
            onSelect={onPlaceSelected}
            style={{ position: 'absolute', top: '0', left: '50%' }}
          />
          <Map center={center} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
