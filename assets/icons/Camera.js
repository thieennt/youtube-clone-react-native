import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CameraIcon = props => (
  <Svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M16.25 16.4651H3.75C3.41848 16.4651 3.10054 16.3334 2.86612 16.099C2.6317 15.8646 2.5 15.5466 2.5 15.2151V6.46509C2.5 6.13357 2.6317 5.81563 2.86612 5.5812C3.10054 5.34678 3.41848 5.21509 3.75 5.21509H6.24954L7.49954 3.34009H12.4995L13.7495 5.21509H16.25C16.5815 5.21509 16.8995 5.34678 17.1339 5.5812C17.3683 5.81563 17.5 6.13357 17.5 6.46509V15.2151C17.5 15.5466 17.3683 15.8646 17.1339 16.099C16.8995 16.3334 16.5815 16.4651 16.25 16.4651Z"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M10 13.3401C11.5533 13.3401 12.8125 12.0809 12.8125 10.5276C12.8125 8.97429 11.5533 7.71509 10 7.71509C8.4467 7.71509 7.1875 8.97429 7.1875 10.5276C7.1875 12.0809 8.4467 13.3401 10 13.3401Z"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default CameraIcon;
