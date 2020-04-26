import React from 'react';
import Svg, { Rect, Defs, Stop, LinearGradient } from 'react-native-svg';

const RectanglePink = props => (
  <Svg width={60} height={60} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Rect width="60" height="60" rx="20" fill="url(#paint0_linear)" />
    <Defs>
      <LinearGradient id="paint0_linear" x1="60" y1="0" x2="0" y2="60" gradientUnits="userSpaceOnUse">
        <Stop stop-color="#9A4AEA" />
        <Stop offset="1" stop-color="#FC5D70" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default RectanglePink;
