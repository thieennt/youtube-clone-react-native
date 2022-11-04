import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const LibraryIcon = props => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M11 7L17 10.5L11 14V7ZM18 20H4V6H3V21H18V20ZM21 18H6V3H21V18ZM7 17H20V4H7V17Z"
      fill="black"
    />
  </Svg>
);

export default LibraryIcon;
