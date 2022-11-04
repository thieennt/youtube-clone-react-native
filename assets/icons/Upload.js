import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

const UploadIcon = props => (
  <Svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <G clip-path="url(#clip0_132_2071)">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23 21V12.8333H21V21H12.8333V23H21V31.1667H23V23H31.1667V21H23Z"
        fill="black"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22 2.00001C10.9543 2.00001 2 10.9543 2 22C2 33.0457 10.9543 42 22 42C33.0457 42 42 33.0457 42 22C42 10.9543 33.0457 2.00001 22 2.00001ZM3.66667 22C3.66667 11.88 11.88 3.66666 22 3.66666C32.12 3.66666 40.3333 11.88 40.3333 22C40.3333 32.12 32.12 40.3333 22 40.3333C11.88 40.3333 3.66667 32.12 3.66667 22Z"
        fill="black"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_132_2071">
        <Rect width="44" height="44" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default UploadIcon;
