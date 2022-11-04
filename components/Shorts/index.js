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
  header: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 29,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    paddingHorizontal: 8,
  },
  subTitle: {
    fontSize: 10,
    fontWeight: '400',
    color: '#9D9D9D',
  },
});

export default ShortSection;
