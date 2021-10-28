import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

import TargetIcon from './TargetIcon';
import { MapInputProps } from './MapInput';

export const MapInputByRegion: React.FC<MapInputProps> = ({
  onChange,
  region,
  style,
  targetIconSize = 50,
  targetIconColor = 'black',
  TargetIconComponent = TargetIcon,
  ...props
}) => {
  const iconStyle = useMemo(
    () => [
      styles.icon,
      {
        transform: [
          { translateX: -targetIconSize / 2 },
          { translateY: -targetIconSize / 2 },
        ],
      },
    ],
    [targetIconSize]
  );

  return (
    <View style={[styles.container, style]}>
      <MapView
        {...props}
        style={styles.map}
        onRegionChangeComplete={onChange}
        initialRegion={region}
      />
      <TargetIconComponent
        size={targetIconSize}
        color={targetIconColor}
        style={iconStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  map: {
    flex: 1,
    width: '100%',
  },
  icon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
});

export default MapInputByRegion;
