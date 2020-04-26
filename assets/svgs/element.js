import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Elements = props => (
  <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M20.5001 3L28.5 8V17L20.5001 22L12.5 17V8L20.5001 3Z" fill="white" fillOpacity="0.1" />
    <Path d="M29.0001 18L37 23V32L29.0001 37L21 32V23L29.0001 18Z" fill="white" fillOpacity="0.05" />
    <Path d="M12.0001 18L20 23V32L12.0001 37L4 32V23L12.0001 18Z" fill="white" fillOpacity="0.15" />
  </Svg>
);

export default Elements;
