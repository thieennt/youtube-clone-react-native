import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CaretDownIcon = props => (
  <Svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M16.25 7.5L10 13.75L3.75 7.5"
      stroke="#0A0A0A"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default CaretDownIcon;
