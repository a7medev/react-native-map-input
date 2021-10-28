import React from 'react';
import { MapViewProps, LatLng, Region } from 'react-native-maps';

import MapInputByMarker from './MapInputByMarker';
import MapInputByRegion from './MapInputByRegion';

export const MapInputVariants = Object.freeze({
  BY_REGION: 'by-region' as const,
  BY_MARKER: 'by-marker' as const,
});

export interface MapInputProps extends MapViewProps {
  region: Region;
  variant?: 'by-region' | 'by-marker';

  /**
   * The size of the icon in the center of the "by-region" variant map
   *
   * @default 50
   */
  targetIconSize?: number;

  /**
   * The color of the icon in the center of the "by-region" variant map
   *
   * @default 50
   */
  targetIconColor?: string;

  /**
   * A component of the icon in the center of the "by-region" variant map
   * otherwise it will use the default icon
   */
  TargetIconComponent?: React.ComponentType<any>;
  onChange?: (coordinate: LatLng) => void;
}

export const MapInput: React.FC<MapInputProps> = ({
  variant = MapInputVariants.BY_MARKER,
  ...props
}) => {
  if (variant === MapInputVariants.BY_MARKER) {
    return <MapInputByMarker {...props} />;
  }
  if (variant === MapInputVariants.BY_REGION) {
    return <MapInputByRegion {...props} />;
  }

  throw new Error(`Unknown variant: ${variant}`);
};

export default MapInput;
