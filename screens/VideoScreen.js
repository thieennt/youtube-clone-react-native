import React from 'react';
import WebView from 'react-native-webview';

export function VideoScreen({route}) {
  const {videoId} = route.params;
  return (
    <WebView
      source={{uri: `https://www.youtube.com/watch?v=${videoId}`}}
      style={{flex: 1}}
    />
  );
}
