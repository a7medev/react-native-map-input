import React, { useMemo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

const ratio = (size: number, percent: number) => size * (percent / 100);

export interface TargetIconProps {
  /** @default 'black' */
  color?: string;

  /** @default 50 */
  size?: number;
  style?: StyleProp<ViewStyle>;
}

const TargetIcon: React.FC<TargetIconProps> = ({
  color = 'black',
  size = 50,
  style,
}) => {
  const d = useMemo(
    () =>
      [
        `M ${ratio(size, 5)} ${ratio(size, 50)}`,
        `h ${ratio(size, 20)}`,
        `M ${ratio(size, 50)} ${ratio(size, 95)}`,
        `V ${ratio(size, 75)}`,
        `M ${ratio(size, 75)} ${ratio(size, 50)}`,
        `h ${ratio(size, 20)}`,
        `M ${ratio(size, 50)} ${ratio(size, 25)}`,
        `V ${ratio(size, 5)}`,
      ].join(' '),
    [size]
  );

  return (
    <Svg width={size} height={size} fill="none" style={style}>
      <Circle
        cx={ratio(size, 50)}
        cy={ratio(size, 50)}
        r={ratio(size, 35)}
        stroke={color}
        strokeWidth={ratio(size, 5)}
      />
      <Path
        d={d}
        stroke={color}
        strokeWidth={ratio(size, 5)}
        strokeLinecap="round"
      />
      <Circle
        cx={ratio(size, 50)}
        cy={ratio(size, 50)}
        r={ratio(size, 5)}
        fill={color}
      />
    </Svg>
  );
};

export default TargetIcon;
