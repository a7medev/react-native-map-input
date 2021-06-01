import React, { useEffect, useRef } from 'react';
import MapView, {
  Marker,
  MapViewProps,
  LatLng,
  Region
} from 'react-native-maps';

export interface MapInputProps extends MapViewProps {
  region: Region;
  onChange?: (coordinate: LatLng) => void;
}

export const MapInput: React.FC<MapInputProps> = ({
  onChange,
  region,
  ...props
}) => {
  const mapView = useRef<MapView>(null);

  useEffect(() => {
    mapView.current?.animateCamera({
      center: region
    });
  }, [region]);

  return (
    <MapView
      {...props}
      ref={mapView}
      onPress={e => onChange && onChange(e.nativeEvent.coordinate)}
      initialRegion={region}
    >
      <Marker
        draggable
        onDragEnd={e => onChange && onChange(e.nativeEvent.coordinate)}
        coordinate={region}
      />
    </MapView>
  );
};

export default MapInput;
