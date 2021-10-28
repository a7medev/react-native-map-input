import React, { useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';

import { MapInputProps } from './MapInput';

export const MapInputByMarker: React.FC<MapInputProps> = ({
  onChange,
  region,
  ...props
}) => {
  const mapView = useRef<MapView>(null);

  useEffect(() => {
    mapView.current?.animateCamera({
      center: region,
    });
  }, [region]);

  return (
    <MapView
      {...props}
      ref={mapView}
      onPress={(e) =>
        onChange && onChange({ ...region, ...e.nativeEvent.coordinate })
      }
      initialRegion={region}
    >
      <Marker
        draggable
        onDragEnd={(e) =>
          onChange && onChange({ ...region, ...e.nativeEvent.coordinate })
        }
        coordinate={region}
      />
    </MapView>
  );
};

export default MapInputByMarker;
