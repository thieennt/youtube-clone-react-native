import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const MoreVerticalIcon = props => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M12 16.5C12.83 16.5 13.5 17.17 13.5 18C13.5 18.83 12.83 19.5 12 19.5C11.17 19.5 10.5 18.83 10.5 18C10.5 17.17 11.17 16.5 12 16.5ZM10.5 12C10.5 12.83 11.17 13.5 12 13.5C12.83 13.5 13.5 12.83 13.5 12C13.5 11.17 12.83 10.5 12 10.5C11.17 10.5 10.5 11.17 10.5 12ZM10.5 6C10.5 6.83 11.17 7.5 12 7.5C12.83 7.5 13.5 6.83 13.5 6C13.5 5.17 12.83 4.5 12 4.5C11.17 4.5 10.5 5.17 10.5 6Z"
      fill={props.color}
    />
  </Svg>
);

export default MoreVerticalIcon;
