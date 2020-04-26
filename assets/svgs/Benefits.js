import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Benefits = props => (
  <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M7 20C7 19.4477 7.44772 19 8 19H12C12.5523 19 13 19.4477 13 20V27H7V20Z"
      fill="white"
      fillOpacity="0.1"
    />
    <Path
      d="M17 15C17 14.4477 17.4477 14 18 14H22C22.5523 14 23 14.4477 23 15V27H17V15Z"
      fill="white"
      fillOpacity="0.1"
    />
    <Path
      d="M27 10C27 9.44772 27.4477 9 28 9H32C32.5523 9 33 9.44772 33 10V27H27V10Z"
      fill="white"
      fillOpacity="0.1"
    />
    <Path
      d="M3 28C3 27.4477 3.44772 27 4 27H36C36.5523 27 37 27.4477 37 28V30C37 30.5523 36.5523 31 36 31H4C3.44772 31 3 30.5523 3 30V28Z"
      fill="white"
      fillOpacity="0.15"
    />
  </Svg>
);

export default Benefits;
