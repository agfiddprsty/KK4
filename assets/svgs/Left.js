import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Left = props => (
  <Svg width={7} height={10} viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M6 9L2 5L6 1" stroke="white" stroke-width="2" />
  </Svg>
);

export default Left;
