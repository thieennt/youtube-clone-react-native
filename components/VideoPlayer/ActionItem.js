import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const ActionItem = props => {
  return (
    <View style={styles.container}>
      <Pressable>{props.icon}</Pressable>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: 'black',
  },
});

export default ActionItem;
