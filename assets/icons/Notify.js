import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const NotifyIcon = props => (
  <Svg
    width="16"
    height="21"
    viewBox="0 0 16 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M6 19H10C10 20.1 9.1 21 8 21C6.9 21 6 20.1 6 19ZM16 16.35V18H0V16.35L2 14.47V9.32004C2 6.40004 3.56 4.10004 6 3.34004V2.96004C6 1.54004 7.49 0.460037 8.99 1.20004C9.64 1.52004 10 2.23004 10 2.96004V3.35004C12.44 4.10004 14 6.41004 14 9.33004V14.48L16 16.35ZM15 16.77L13 14.89V9.42004C13 6.95004 11.81 5.06004 9.87 4.32004C8.61 3.79004 7.23 3.82004 6.03 4.35004C4.15 5.11004 3 6.99004 3 9.42004V14.89L1 16.77V17H15V16.77Z"
      fill="black"
    />
  </Svg>
);

export default NotifyIcon;
