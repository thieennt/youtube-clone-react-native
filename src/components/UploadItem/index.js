import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export function UploadItem(props) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.icon}>{props.icon}</Pressable>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  icon: {
    backgroundColor: '#ECECEC',
    width: 36,
    height: 36,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    paddingLeft: 12,
  },
});
