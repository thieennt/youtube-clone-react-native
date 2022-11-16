import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import HistoryIcon from '../../../assets/icons/library/History';

export const LibraryHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftWrapper}>
        <HistoryIcon />
        <Text style={styles.textWatch}>Watched videos</Text>
      </View>
      <Pressable>
        <Text style={styles.textShow}>VIEW ALL</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: 'white',
  },
  leftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWatch: {
    paddingLeft: 12,
    fontWeight: '700',
    color: 'black',
    fontSize: 16,
  },
  textShow: {
    color: '#068BFF',
  },
});
