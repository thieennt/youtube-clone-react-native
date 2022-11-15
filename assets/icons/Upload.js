import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

const UploadIcon = props => (
  <Svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <G clip-path="url(#clip0_132_2071)">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.9545 20.0455V12.25H20.0455V20.0455H12.25V21.9546H20.0455V29.75H21.9545V21.9546H29.75V20.0455H21.9545Z"
        fill="black"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21 1.9091C10.4564 1.9091 1.90909 10.4564 1.90909 21C1.90908 31.5436 10.4564 40.0909 21 40.0909C31.5436 40.0909 40.0909 31.5436 40.0909 21C40.0909 10.4564 31.5436 1.9091 21 1.9091ZM3.5 21C3.5 11.34 11.34 3.5 21 3.5C30.66 3.5 38.5 11.34 38.5 21C38.5 30.66 30.66 38.5 21 38.5C11.34 38.5 3.5 30.66 3.5 21Z"
        fill="black"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_132_2071">
        <Rect width="42" height="42" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default UploadIcon;
