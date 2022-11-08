import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CommentIcon = props => (
  <Svg
    width="10"
    height="16"
    viewBox="0 0 10 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M8.125 9.75006L5 12.8751L1.875 9.75006"
      stroke="#6C6C6C"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M1.875 6.25006L5 3.12506L8.125 6.25006"
      stroke="#6C6C6C"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default CommentIcon;
