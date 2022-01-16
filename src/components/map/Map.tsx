import React from 'react';

import { GoogleMap } from '@react-google-maps/api';

import { ReturnComponentType } from '../../types';

import { defaultTheme } from './Theme';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: false,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
  styles: defaultTheme,
};

export const Map = ({ center }: any): ReturnComponentType => {
  const mapRef = React.useRef(undefined);
  const onLoad = React.useCallback(map => {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(() => {
    mapRef.current = undefined;
  }, []);

  return (
    <div style={{ height: '800px', width: '800px' }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      />
    </div>
  );
};
