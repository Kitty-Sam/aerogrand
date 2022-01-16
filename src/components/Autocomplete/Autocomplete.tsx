import React, { useEffect } from 'react';

import useOnclickOutside from 'react-cool-onclickoutside';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';

// @ts-ignore
export const Autocomplete = ({ isLoaded, onSelect }: any): any => {
  const {
    ready,
    value,
    init,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    initOnMount: false,
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (e: any): any => {
    setValue(e.target.value);
  };

  const firstParam = 0;

  const handleSelect =
    ({ description }: any) =>
    () => {
      setValue(description, false);
      clearSuggestions();

      getGeocode({ address: description })
        .then(results => getLatLng(results[firstParam]))
        .then(({ lat, lng }) => {
          console.log('📍 Coordinates: ', { lat, lng });
          onSelect({ lat, lng });
        })
        .catch(error => {
          console.log('😱 Error: ', error);
        });
    };

  const renderSuggestions = (): any =>
    data.map(suggestion => {
      const {
        // eslint-disable-next-line camelcase
        place_id,
        // eslint-disable-next-line camelcase
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,camelcase,jsx-a11y/no-noninteractive-element-interactions
        <li key={place_id} onClick={handleSelect(suggestion)}>
          {/* eslint-disable-next-line camelcase */}
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  useEffect(() => {
    if (isLoaded) {
      init();
    }
  }, [isLoaded, init]);
  return (
    <div ref={ref}>
      <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Where are you going?"
      />
      {status === 'OK' && <ul>{renderSuggestions()}</ul>}
    </div>
  );
};
