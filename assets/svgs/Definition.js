import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Definition = props => (
  <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M34.7778 40H9.22222C7.99492 40 7 39.0051 7 37.7778V33H31.5185C32.3367 33 33 32.3367 33 31.5185V19.4815C33 18.6633 32.3367 18 31.5185 18H7V2.22222C7 0.994921 7.99492 0 9.22222 0H27L37 9.62963V37.7778C37 39.0051 36.0051 40 34.7778 40Z"
      fill="#303030"
    />
    <Path d="M29.2222 9.62963H37L27 0V7.40741C27 8.63471 27.9949 9.62963 29.2222 9.62963Z" fill="#4C4C4C" />
    <Path
      d="M3 19.4815C3 18.6633 3.66328 18 4.48148 18H31.5185C32.3367 18 33 18.6633 33 19.4815V31.5185C33 32.3367 32.3367 33 31.5185 33H4.48148C3.66328 33 3 32.3367 3 31.5185V19.4815Z"
      fill="#464646"
    />
  </Svg>
);

export default Definition;
