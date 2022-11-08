import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const PlusIcon = props => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M3.75 12H20.25"
      stroke="#068BFF"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M12 3.75V20.25"
      stroke="#068BFF"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default PlusIcon;
