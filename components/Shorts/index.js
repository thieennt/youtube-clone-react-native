import React from 'react';
import {StyleSheet, View} from 'react-native';
import ShortHeader from './Header';
import ListShort from './ListShort';

const ShortSection = () => {
  return (
    <View style={styles.container}>
      <ShortHeader />
      <ListShort />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginVertical: 12,
    backgroundColor: '#fff',
  },
});

export default ShortSection;
