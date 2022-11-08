import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

const DownloadIcon = props => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <G clip-path="url(#clip0_34_403)">
      <Path
        d="M13 2.99963V16.9996"
        stroke="#0A0A0A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7 10L13 17L19 10"
        stroke="#0A0A0A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7 17H20"
        stroke="#0A0A0A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_34_403">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default DownloadIcon;
