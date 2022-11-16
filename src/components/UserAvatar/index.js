import React from 'react';
import {Image, StyleSheet} from 'react-native';

const UserAvatar = props => {
  return (
    <Image
      style={[{width: props.width, height: props.height}, styles.avatar]}
      source={{
        uri: props.avatar,
      }}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    resizeMode: 'cover',
    borderRadius: 25,
  },
});

export default UserAvatar;
