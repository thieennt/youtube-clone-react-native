import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ArrowLeftIcon = props => (
  <Svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M16.875 10H3.125"
      stroke="#0A0A0A"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M8.75 4.375L3.125 10L8.75 15.625"
      stroke="#0A0A0A"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default ArrowLeftIcon;
