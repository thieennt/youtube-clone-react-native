import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

const SwitchIcon = props => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <G clip-path="url(#clip0_134_40)">
      <Path d="M4 6H3L3 20C3 21.1 2.9 21 4 21H18V20H4V6Z" fill="black" />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22 2H6V18H22V2ZM7 17V3H21V17H7Z"
        fill="black"
      />
      <Path
        d="M14.198 6.38704C14.9227 6.38704 15.5099 6.9743 15.5099 7.69901C15.5099 8.42372 14.9227 9.01099 14.198 9.01099C13.4732 9.01099 12.886 8.42372 12.886 7.69901C12.886 6.9743 13.4732 6.38704 14.198 6.38704ZM14.198 12.0098C16.0535 12.0098 18.0089 12.9219 18.0089 13.3218V14.009H10.387V13.3218C10.387 12.9219 12.3424 12.0098 14.198 12.0098ZM14.198 5.20001C12.8173 5.20001 11.699 6.31831 11.699 7.69901C11.699 9.07971 12.8173 10.198 14.198 10.198C15.5786 10.198 16.6969 9.07971 16.6969 7.69901C16.6969 6.31831 15.5786 5.20001 14.198 5.20001ZM14.198 10.8228C12.5299 10.8228 9.19995 11.6599 9.19995 13.3218V15.196H19.1959V13.3218C19.1959 11.6599 15.866 10.8228 14.198 10.8228Z"
        fill="black"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_134_40">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SwitchIcon;
