import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ShareIcon = props => (
  <Svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M15.5 5.63L21.16 12L15.5 18.37V15V14H14.5C10.54 14 7.36 15 4.75 17.09C6.59 13.02 9.86 10.69 14.64 9.99L15.5 9.86V9V5.63ZM14.5 3V9C6.72 10.13 3.61 15.33 2.5 21C5.28 17.03 8.94 15 14.5 15V21L22.5 12L14.5 3Z"
      fill="#0A0A0A"
    />
  </Svg>
);

export default ShareIcon;
